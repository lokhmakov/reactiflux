const options = [`yes`, `no`]

export default function Page() {
  const questionHandler = console.log

  return options.map((key) => (
    <button key={key} onClick={() => questionHandler(key)}>
      {key}
    </button>
  ))
}
