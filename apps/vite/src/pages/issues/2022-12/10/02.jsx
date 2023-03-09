export default function App() {
  const name = `foo`
  return <Person {...{name}} />
}

function Person({name}) {
  return <div>{name}</div>
}
