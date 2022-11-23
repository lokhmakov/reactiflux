const pad = (s) => s.padStart(2, `0`)

function getISOSydneyTime() {
  const date = new Date(
    new Date().toLocaleString('en-US', {timeZone: 'Australia/Sydney'}),
  )
  const yyyy = date.getFullYear()
  const mm = pad(`${date.getMonth() + 1}`)
  const dd = pad(`${date.getDate()}`)
  const HH = pad(`${date.getHours()}`)
  const MM = pad(`${date.getMinutes()}`)
  const SS = pad(`${date.getSeconds()}`)

  return `${yyyy}-${mm}-${dd}T${HH}:${MM}:${SS}.000Z`
}

console.log(`getISOSydneyTime()`, getISOSydneyTime())
