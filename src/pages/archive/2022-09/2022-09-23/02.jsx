export default function App() {
  function _onChange(e) {
    console.log(`_onChange`, e)
  }

  return <input type="date" onChange={_onChange} />
}
