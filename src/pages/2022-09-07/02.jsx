import * as React from 'react'
import ContentEditable from 'react-contenteditable'

export default function Page() {
  const [previousKey, setPreviousKey] = React.useState(null)

  const text = React.useRef('')

  const handleChange = (evt) => {
    text.current = evt.target.value
  }

  const handleBlur = () => {
    console.log(text.current)
  }

  const onKeyDown = useRefCallback(
    (e) => {
      console.log(previousKey)
      setPreviousKey(e.key)
    },
    [previousKey],
  )

  return (
    <ContentEditable
      html={text.current}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={onKeyDown}
    />
  )
}

function useRefCallback(cb, deps) {
  const ref = React.useRef(cb)

  const handler = React.useCallback(cb, deps)

  React.useEffect(() => {
    ref.current = handler
  }, [handler])

  return (...args) => ref.current(...args)
}
