const items = [
  {number: `1`},
  {number: `10`},
  {number: `11`},
  {number: `12`},
  {number: `2`},
  {number: `3`},
]

items.sort((a, b) => parseInt(a.number) - parseInt(b.number))
items.sort((a, b) => Number(a.number) - Number(b.number))
items.sort((a, b) => +a.number - +b.number)

console.log(items)
