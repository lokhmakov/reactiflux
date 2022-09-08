export default function Page() {
  return null
}

const s = `Thu Aug 04 2022 17:06:41 GMT+0200`

const minsInMonthTo = (s) => {
  const d1 = new Date(s)
  const d2 = new Date(s)
  d2.setDate(1)
  d2.setHours(0)
  d2.setMinutes(0)
  d2.setSeconds(0)
  return ((d1 - d2) / 60000) | 1
}

console.log(minsInMonthTo(s)) // => 5407
