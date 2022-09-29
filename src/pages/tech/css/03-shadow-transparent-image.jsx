// https://twitter.com/denicmarko/status/1575063847630938112?t=677b8ksKE_76mfxfymTuuQ&s=35

import * as React from 'react'
import styled from 'styled-components'

export default function App() {
  const [is, setIs] = React.useState(false)

  return (
    <Image
      src="https://robohash.org/Hello"
      is={is}
      onClick={() => setIs((v) => !v)}
    />
  )
}

const filterProps = (list) => (key, fn) => !list.includes(key) && fn(key)

const Image = styled.img.withConfig({
  shouldForwardProp: filterProps([`is`]),
})`
  ${({is}) => (is ? `filter: drop-shadow(2px 4px 8px #585858);` : ``)}
`
