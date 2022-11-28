import '@master/css'
import * as React from 'react'

const replace = (i, cb) => (list) =>
  list.map((v, index) => (i === index ? cb(v) : v))

export default function App() {
  const [v, set] = React.useState([
    [{name: `1`}, {name: `2`}, {name: `3`}],
    [{name: `3`}, {name: `4`}, {name: `5`}],
  ])

  function insert(x, value) {
    set(replace(x, (a) => [...a, value]))
  }

  function updateName(x, y, name) {
    set(replace(x, (a) => replace(y, () => ({name}))(a)))
  }

  return (
    <div className="flex flex:col gap:2">
      <button
        className="p:2 bg:blue-50"
        onClick={() => insert(0, {name: `25`})}
      >
        insert
      </button>
      <button className="p:2 bg:blue-50" onClick={() => updateName(0, 0, `44`)}>
        update
      </button>
      <div className="grid-auto-rows grid-cols:3 p:4 gap:2">
        <List list={v[0]} />
        <List list={v[1]} />
        <MiltiList listList={v} />
      </div>
    </div>
  )
}

function List(props) {
  return (
    <div>
      {props.list.map((v, i) => (
        <div key={i}>{v.name}</div>
      ))}
    </div>
  )
}

function MiltiList(props) {
  return (
    <div>
      {props.listList.map((v, i) => (
        <div key={i}>{v[0].name}</div>
      ))}
    </div>
  )
}
