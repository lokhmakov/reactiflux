const n1 = 0.0000001
const formater = new Intl.NumberFormat('en-US', {minimumFractionDigits: 7})

const format1 = (n) =>
  n.toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 15,
  })
const format2 = formater.format

console.log(format1(n1))
console.log(format2(n1))
