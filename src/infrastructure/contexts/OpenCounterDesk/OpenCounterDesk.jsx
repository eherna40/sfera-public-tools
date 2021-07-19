import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import { useForm, Controller } from 'react-hook-form'
import { TPVContext } from '../TPV/TPV'
import Button from '../../../components/commons/Buttons/Button/Button'
import TextInput from '../../../components/commons/Form/TextInput/TextInput'

const OpenCounterDesk = () => {
  const { handleSubmit, errors, control } = useForm({
    mode: 'all',
    defaultValues: {
      saldo: 0,
    },
  })
  const { openCashDesk } = useContext(TPVContext)

  const onClickOpen = (data) => {
    openCashDesk(data.saldo)
  }
  return (
    <form onSubmit={handleSubmit(onClickOpen)} className="OpenCounterDesk">
      <Controller
        render={(props) => (
          <TextInput
            required
            name="saldo"
            label="Saldo de apertura"
            size="small"
            error={errors?.nickname?.message}
            value={props.value}
            onChange={(el) => {
              const val = el.target.value.replace(/(?!-)[^0-9.]/g, '')
              props.onChange(val)
            }}
          />
        )}
        name="saldo"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Campo obligatorio',
          },
        }}
      />

      <div className="tw-w-full tw-pt-4 tw-flex tw-justify-center tw-gap-4 tw-pb-4">
        <Button
          primary
          type="submit"
          label="Abrir"
          onClick={handleSubmit(onClickOpen)}
          uppercase
        />
      </div>
    </form>
  )
}

OpenCounterDesk.propTypes = {}

export default OpenCounterDesk
