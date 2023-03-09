import * as React from 'react'

const initial = [
  {name: `name1`, value: `value1`},
  {name: `name2`, value: `value2`},
  {name: `name3`, value: `value3`},
]

export default function App() {
  const {order, values, actions} = useFields(initial, true)

  const _onChange = ({target: {name, value}}) => actions.change(name, value)

  const _addRandom = () => actions.add(makeRandomName())

  return (
    <div className="App">
      <div>
        {order.map((name) => (
          <span key={name}>
            <input
              type="text"
              name={name}
              onChange={_onChange}
              value={values[name] || ``}
            />
          </span>
        ))}
        <button onClick={_addRandom}>+</button>
      </div>
    </div>
  )
}

const makeRandomName = () => Math.random().toString(32).slice(2)
const makeLazyOrder = (list) => () => list.map((v) => v.name)
const makeLazyValues = (list) => () =>
  list.reduce((r, v) => ((r[v.name] = v.value), r), {})

function useFields(initialList, log) {
  const [order, setOrder] = React.useState(makeLazyOrder(initialList))
  const [values, setValues] = React.useState(makeLazyValues(initialList))

  const add = (name) => setOrder((prevOrder) => prevOrder.concat(name))
  const change = (name, value) =>
    setValues((prev) => Object.assign({}, prev, {[name]: value}))

  React.useEffect(() => log && console.log({values}), [log, values])

  return {order, values, actions: {add, change}}
}
