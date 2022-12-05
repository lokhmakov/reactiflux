import {configureStore} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {Provider, useSelector} from 'react-redux'

const initialState = {
  value: 0,
  list: [{amount: 10}, {amount: 20}, {amount: 30}, {amount: 40}, {amount: 50}],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
})

export const store = configureStore({
  reducer: {counter: counterSlice.reducer},
})

export default function Page() {
  return (
    <Provider store={store}>
      <Cost />
    </Provider>
  )
}

function Cost() {
  const counter = useSelector((state) => state.counter)

  return (
    <div
      onClick={() => {
        const state = {
          value: counter.value * 100,
          list: counter.list.map((v) => ({
            amount: v.amount * 25,
          })),
        }
        console.log(state)
      }}
    >
      test
    </div>
  )
}
