import * as React from 'react'

const makeId = () => Math.random().toString(32).slice(2)
const makeOne = (id = makeId()) => ({
  id,
  title: `title`,
  price: (Math.random() * 50) | 1,
  thumbnail: ``,
  sound: ``,
})
const makeItems = (length) => Array.from({length}, () => makeOne())

const list = [
  {items: makeItems(3), name: `name1`},
  {items: makeItems(4), name: `name2`},
  {items: makeItems(6), name: `name3`},
]

export default function App() {
  return list
    .flatMap(({name, items}) => items.map((item) => ({name, ...item})))
    .slice(0, 6)
    .map((v) => <Item key={v.id} name={v.name} />)
}

function Item({name}) {
  return <div>{name}</div>
}
