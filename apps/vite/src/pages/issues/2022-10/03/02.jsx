// import { Checkbox } from '@mui/material'
// import * as React from 'react'

// const makeId = () => Math.random().toString(32).slice(2)
// const makeOne = (params) => ({id: makeId(), ...params})

// export default function App() {
//   const {list} = useCategories()

//   return <Group list={list} />
// }

// function Group({list}) {
//   return list.map((v) => (
//       <Checkbox>
//     ))
// }

// function Checkbox({name, value}) {
//   return (
//     <label className="flex gap-2">
//       <input type="checkbox" checked={value} />
//       <span>{name}</span>
//     </label>
//   )
// }

// function useCategories() {
//   const [list, setList] = React.useState(() => [
//     makeOne({name: `All`}),
//     makeOne({name: `Cat 1`}),
//     makeOne({name: `Cat 2`}),
//     makeOne({name: `Cat 3`}),
//   ])

//   function onchange() {}

//   return {list}
// }
