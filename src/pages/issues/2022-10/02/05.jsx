import * as React from 'react'

export default function Page() {
  const [value, setValue] = React.useState(0)

  const onKey = useRefCallback(
    (e) => {
      if (e.key === `Enter`) {
        console.log(value)
        setValue((v) => v + 1)
      }
    },
    [value],
  )

  React.useEffect(() => {
    document.addEventListener(`keydown`, onKey)
    return () => document.removeEventListener(`keydown`, onKey)
  }, [])

  return null
}

function useRefCallback(cb, deps) {
  const ref = React.useRef(cb)
  const handler = React.useCallback(cb, deps)

  React.useEffect(() => {
    ref.current = handler
  }, [handler])

  return React.useCallback((...args) => ref.current(...args), [])
}
