export default function App() {
  return (
    <>
      <Section children={(a, b) => <div>{`${a} - ${b}`}</div>} />
      <Section>{(a, b) => <div>{`${a} - ${b}`}</div>}</Section>
    </>
  )
}

function Section({children}) {
  return children(1, 2)
}
