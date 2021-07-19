export const getDataMatrix = () => {
  let qr = '01084700065080081722060210BR197721XGEV52M01'
  const ean = qr.substr(3, 13)
  const date = qr.substr(18, 6)
  qr = qr.slice(24)
  const serial = qr.substr(qr.indexOf('21') + 2)
  const lot = qr.substr(qr.indexOf('10') + 2, qr.indexOf('21'))

  return {
    ean,
    date,
    serial,
    lot,
  }
}
