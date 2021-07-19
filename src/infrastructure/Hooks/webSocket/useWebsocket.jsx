import { useDispatch,useSelector } from 'react-redux'
import Pusher from 'pusher-js'
import { useState } from 'react'
import { actionUpdateUser } from '../../redux/actions/user'
import useFlashMessage from '../useFlashMessage'
import { useFarmaPremium } from '../useFarmaPremium'

const idPusher=process.env.REACT_APP_PUSHER_ID||'d0194806476ac161fa7b'

const useWebsocket=() => {
  const token=useSelector((state) => state.userReducer.token)
  const farmacia=useSelector((state) => state.userReducer.farmacia)
  const usuario=useSelector((state) => state.userReducer.usuario)
  const dispatch=useDispatch()
  const [action,setAction]=useState(null)
  const [data,setData]=useState(null)
  const { showMessage }=useFlashMessage()

  const { updateUrl }=useFarmaPremium()


  const getExtensions=async () => {
    const { extensions }=await fetch(process.env.REACT_APP_URL_ENVIRONMENT,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
                subscription realtimeChannel {
                    realtimeChannel(farmacia_id:${farmacia.id}, usuario_id:${usuario.id}){
                        funcion
                        accion
                        datos
                    }
            }`,
      }),
    }).then((res) => res.json())

    return extensions
  }
  const connect=async () => {
    try {
      setData(null)
      setAction(null)
      let { channelId }=usuario
      console.log(channelId)
      if(!channelId) {
        const extensions=await getExtensions()
        channelId=extensions.lighthouse_subscriptions.channels.realtimeChannel
      }
      const pusher=new Pusher(idPusher,{
        cluster: 'eu',
        encrypted: true,
        authEndpoint: `${process.env.REACT_APP_URL_ENVIRONMENT}/subscriptions/auth`,
        auth: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      })
      console.log(pusher)
      const channel=pusher.subscribe(channelId)
      channel.bind('lighthouse-subscription',({ result }) => {
        const { accion,datos,funcion }=result.data.realtimeChannel
        setData(datos)
        setAction(accion)
        setCases(accion,datos,funcion)
      })



      pusher.connection.bind('connected',() => {
        dispatch(actionUpdateUser({ id: usuario.id,channelId }))
      })

      pusher.connection.bind('error',(error) => {
        console.log(error)
        showMessage('alert','Realtime',error?.data?.message)
        dispatch(actionUpdateUser({ id: usuario.id,channelId: null }))
        // connect()
      })


      const setCases=(accion,datos,funcion) => {
        switch(funcion) {
          case 'farmapremium':
            if(accion==='autologin_url') {
              updateUrl(datos)
              // window.open(datos, '_blank')
            }
            return;

          default:
            return null;
        }
      }

      return {
        success: true,
      }
    } catch(err) {
      return {
        success: false,
      }
    }
  }

  return [connect,{ data,action }]
}

export default useWebsocket
