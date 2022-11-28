import '@master/css'
import {createWorkerFactory, useWorker} from '@shopify/react-web-worker'

const createWorker = createWorkerFactory(() => import('./worker'))
const makeId = () => Math.random().toString(32).slice(2)
const makeOne = (id = makeId()) => ({id: makeId(), name: makeId()})
const make = (length) => Array.from({length}, makeOne)

export default function App() {
  return <div></div>
}

function useWorkers() {
  const [list, setList] = React.useState(() => make(10))
  const workers = React.useRef({})

  React.useEffect(() => {
    for (let {id} of list) {
      if (!(id in workers.current)) {
        workers.current[id] = 
      }
    }
  }, [list])
}
