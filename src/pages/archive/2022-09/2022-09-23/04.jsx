import * as React from 'react'

export default function App() {
  const arr = [
    {value: 1, text: `a`},
    {value: 2, text: `b`},
  ]
  const id = 3

  const countryCode = React.useMemo(
    () => arr.find((item) => id === item.value)?.text || ``,
    [arr, id],
  )

  return countryCode
}

const data = [
  {
    id: '884',
    original:
      'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/882/Chawkbazar7.png',
    thumbnail:
      'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/882/conversions/Chawkbazar7-thumbnail.jpg',
    __typename: `a`,
  },
  {
    id: '885',
    original:
      'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/883/Chawkbazar8.png',
    thumbnail:
      'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/883/conversions/Chawkbazar8-thumbnail.jpg',
  },
]

console.log(data.map(({__typename, ...rest}) => rest))

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let o of list) {
  if (o > 5) {
    continue
  }
  console.log(o)
}
