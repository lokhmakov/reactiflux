import * as React from 'react'

const DEFAULT_OPTIONS = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
}

export default function App() {
  const [value, setValue] = React.useState(4)

  const ref = React.useRef(null)
  useMutationObserver(ref, log(`onMutation`))

  return (
    <div ref={ref}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div onClick={() => setValue((v) => v + 1)}>{value}</div>
    </div>
  )
}

const log =
  (label) =>
  (...args) =>
    console.log(label, ...args)

function useMutationObserver(ref, onMutation, options = DEFAULT_OPTIONS) {
  React.useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(onMutation)
      observer.observe(ref.current, options)
      return () => observer.disconnect()
    }
  }, [ref])
}
