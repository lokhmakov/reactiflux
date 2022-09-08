import * as React from 'react'

const o: React.FC

export default function Page() {
  const [list, setList] = React.useState(() => data)

  function _onRemove({id}) {
    setList((prevList) => prevList.filter((v) => v.id !== id))
  }

  const clearAll = () => setList([])

  return (
    <>
      <SectionList list={list} onRemove={_onRemove} />
      <SectionClear onClear={clearAll} />
    </>
  )
}

function SectionList({list, onRemove}) {
  return list.map(({id, name}) => (
    <Item key={id} name={name} onClick={() => onRemove({id})} />
  ))
}

function SectionClear({onClear}) {
  return <button onClick={onClear}>Clear</button>
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
