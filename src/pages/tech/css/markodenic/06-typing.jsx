// https://twitter.com/denicmarko/status/1575063847630938112?t=677b8ksKE_76mfxfymTuuQ&s=35

import * as React from 'react'
import styled, {keyframes} from 'styled-components'

export default function App() {
  return (
    <div className="h-full grid place-items-center">
      <Text>This is typing demo.</Text>
    </div>
  )
}

const typing = keyframes`
  from {
    width: 0;
  }
`

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`

const Text = styled.div`
  font-family: Courier;

  width: 20ch;
  animation: ${typing} 2s steps(22), ${blink} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 2em;
`
