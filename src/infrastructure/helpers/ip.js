// const IPV4_REGEX = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g

// https://chrome.google.com/webstore/detail/webrtc-control/fjkmabmdepjfammlpliljpnbhleegehm/related?hl=en

export const getPrivateIpWorkStation = async () => null
// new Promise(async (resolve, reject) => {
//   try {
//     const _peerConnection = new window.RTCPeerConnection()
//     const datachannel = _peerConnection.createDataChannel('channel')
//     const done = (ip, string) => {
//       _peerConnection.onicecandidate = null
//       try {
//         datachannel.close()
//       } catch (err) {}
//       try {
//         _peerConnection.close()
//       } catch (err) {}
//       resolve(ip)
//     }
//     _peerConnection.onicecandidate = (e) => {
//       if (!e.candidate) {
//         done()
//       } else {
//         const ip = e.candidate.candidate.match(IPV4_REGEX)
//         if (ip) {
//           done(ip[0])
//         }
//       }
//     }
//     const _offer = await _peerConnection.createOffer()
//     await _peerConnection.setLocalDescription(_offer)
//   } catch (error) {
//     console.log(error)
//     reject(null)
//   }
