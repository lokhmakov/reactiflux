import {useState, useRef, createContext, useContext, memo} from 'react'

const Context = createContext()

export default function App() {
  const [value, setValue] = useState(0)

  return (
    <Context.Provider value={{value, setValue}}>
      <ItemGetter />
      <ItemSetter />
    </Context.Provider>
  )
}

function ItemGetter() {
  const {value} = useContext(Context)

  return (
    <div>
      {value} and renders {useRef(0).current++}
    </div>
  )
}

function ItemSetter() {
  const {setValue} = useContext(Context)
  return <ItemSetterRaw setValue={setValue} />
}

const ItemSetterRaw = memo(({setValue}) => (
  <div onClick={() => setValue((v) => v + 1)}>
    click me and renders ({useRef(0).current++})
  </div>
))
