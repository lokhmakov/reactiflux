export default function Page() {
  return null
}

const a1 = [
  {5: {id: '25', name: 'one5'}},
  {1: {id: '21', name: 'one1'}},
  {3: {id: '23', name: 'one3'}},
  {2: {id: '22', name: 'one2'}},
  {0: {id: '20', name: 'one0'}},
]

const sort = (list) =>
  [...list].sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])

// const groupBy = (list) => list.reduce((r, v) => {
//   const [value] = Object.values(v)
//   if (value) {
//     r[value.]
//   }
// }, {})

console.log(sort(a1))
