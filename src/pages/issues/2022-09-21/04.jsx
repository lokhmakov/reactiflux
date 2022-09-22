import * as React from 'react'

export default function Page() {
  return null
}

const list = [{features: [1, 2, 3]}, {features: [4, 5, 6]}]

const concatKey = (list, key) => list.reduce((r, v) => r.concat(v[key]), [])

console.log(JSON.stringify(concatKey(list, `features`))) // => [1,2,3,4,5,6]
