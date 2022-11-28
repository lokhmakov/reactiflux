import * as React from 'react'
import TextField from '@mui/material/TextField'

const convertTo = (v) => v / 2
const convertFrom = (v) => v * 2

export default function Page() {
  const [state, setState] = React.useState({a: ``, b: ``})

  const _onChangeA = ({target: {value: a}}) =>
    setState({
      a,
      b: convertTo(Number(a)),
    })

  const _onChangeB = ({target: {value: b}}) =>
    setState({
      a: convertFrom(Number(b)),
      b,
    })

  return (
    <>
      <TextField value={state.a} onChange={_onChangeA} />
      <TextField value={state.b} onChange={_onChangeB} />
    </>
  )
}
