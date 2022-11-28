import * as React from 'react'
import styled from 'styled-components'

export default function Page() {
  return <FooterContainer withBackground />
}

function Flex() {
  return null
}

const FooterContainer = styled(Flex)`
  position: fixed;
  bottom: 0;
  left: 0;
  display: none !important;
  z-index: 17;
  width: 100%;
  height: 65px;
  min-height: 60px;
  margin: 0 auto !important;
  ${({ withBackground }) => console.log(withBackground)}
`