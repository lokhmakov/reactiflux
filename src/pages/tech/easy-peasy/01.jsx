import {useStoreActions} from 'easy-peasy'
import {createStore, action, StoreProvider, useStoreState} from 'easy-peasy'

const store = createStore({
  drawnInput: 'test',
  setDrawnInput: action((state, payload) => {
    state.drawnInput = payload
  }),
})

export default function App() {
  return (
    <>
      <StoreProvider store={store}>
        <Value />
        <ValueSet />
      </StoreProvider>
    </>
  )
}

function Value() {
  const drawnInput = useStoreState((state) => state.drawnInput)
  return <div>{drawnInput}</div>
}

function ValueSet() {
  const setDrawnInput = useStoreActions((actions) => actions.setDrawnInput)
  return <div onClick={() => setDrawnInput(`Hello`)}>click me</div>
}
