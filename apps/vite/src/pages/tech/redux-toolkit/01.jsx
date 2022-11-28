import {configureStore} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {Provider, useSelector} from 'react-redux'

const initialState = {
  value: 0,
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
        counter.value = 10
      }}
    >
      test
    </div>
  )
}
