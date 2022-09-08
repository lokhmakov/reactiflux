import * as React from 'react'

export default function Page() {
  const [list, setList] = React.useState(() => data)

  function _onClick(id) {
    setList((prevList) => prevList.filter((v) => v.id !== id))
  }

  const clearAll = () => setList([])

  return (
    <>
      {list.map(({id, name}) => (
        <Item key={id} name={name} onClick={() => _onClick(id)} />
      ))}
      <button onClick={clearAll}>Clear</button>
    </>
  )
}

const Item = ({name, onClick}) => <div onClick={onClick}>{name}</div>

const data = [
  {
    id: 1,
    name: 'Harry Styles',
    age: 24,
    img: null,
  },

  {
    id: 2,
    name: 'Jagdamba Banaraswale',
    age: 89,
    img: null,
  },
  {
    id: 3,
    name: 'Bunty bhutia',
    age: 33,
    img: null,
  },
  {
    id: 4,
    name: 'Chinku jhunjhunwala',
    age: 19,
    img: null,
  },
  {
    id: 5,
    name: 'Simran Kataria',
    age: 29,
    img: null,
  },
]
