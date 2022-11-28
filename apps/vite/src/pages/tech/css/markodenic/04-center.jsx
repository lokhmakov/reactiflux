// https://twitter.com/denicmarko/status/1575063847630938112?t=677b8ksKE_76mfxfymTuuQ&s=35

import * as React from 'react'
import styled from 'styled-components'

export default function App() {
  return (
    <div className="grid grid-cols-2 gap-2 p-6">
      <O1 className="bg-green-400 p-4">
        <pre>O1</pre>
      </O1>
      <O2 className="bg-red-400 p-4">
        <pre>O2</pre>
      </O2>
      <O3 className="bg-blue-400 p-4">
        <pre>O3</pre>
      </O3>
      <O4 className="bg-slate-400 p-4">
        <pre>O4</pre>
      </O4>
      <div className="bg-green-400 p-4 grid">
        <pre className="m-auto">O5</pre>
      </div>
      <div className="bg-red-400 p-4 flex justify-center items-center">
        <pre>O6</pre>
      </div>
      <div className="bg-blue-400 p-4 grid place-items-center">
        <pre>O7</pre>
      </div>
      <div className="bg-slate-400 p-4 flex">
        <pre className="m-auto">O8</pre>
      </div>
    </div>
  )
}

const O1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const O2 = styled.div`
  display: grid;

  > * {
    margin: auto;
  }
`
const O3 = styled.div`
  display: grid;
  place-items: center;
`
const O4 = styled.div`
  display: flex;

  > * {
    margin: auto;
  }
`
