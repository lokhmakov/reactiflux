new Intl.NumberFormat('en-US', {signDisplay: 'always'}).format(10_000_000)

// => '+10,000,000'

const data = [
  {
    credit: 0,
    debit: 10000,
  },
]

const format = (v) =>
  new Intl.NumberFormat('en-US', {
    signDisplay: 'always',
    maximumFractionDigits: 2,
  }).format(v)

const parse = (item) =>
  item.credit === 0
    ? parseFloat(data[0].debit).toFixed(2) * -1
    : parseFloat(data[0].credit).toFixed(2)

const result = {
  affected_balance: format(parse(data[0])),
}

console.log(result)
