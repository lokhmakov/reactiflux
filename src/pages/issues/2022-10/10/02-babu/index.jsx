import * as React from 'react'
import workerModule from './worker'

export default function App() {
  const onMessage = React.useCallback((e) => {
    console.log(e)
  }, [])

  const worker = useWorker(workerModule, onMessage)

  return (
    <>
      <button onClick={() => worker.current.postMessage({type: `success`})}>
        Sucess
      </button>
      <button onClick={() => worker.current.postMessage({type: `failure`})}>
        Failure
      </button>
    </>
  )
}

function useWorker(workerModule, onMessage) {
  const worker = React.useRef(null)

  React.useEffect(() => {
    const code = workerModule.toString()
    const blob = new Blob([`(${code})()`])
    worker.current = new Worker(URL.createObjectURL(blob))
    worker.current.addEventListener(`message`, onMessage)
    return () => worker.current?.terminate()
  }, [workerModule, onMessage])

  return worker
}
