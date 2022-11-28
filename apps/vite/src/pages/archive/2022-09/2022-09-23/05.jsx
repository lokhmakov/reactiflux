import * as React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: ${({open}) => (open ? `120px` : `10px`)};
`

export default function App() {
  const [open, setOpen] = React.useState(true)

  return <StyledDiv open={open}>content</StyledDiv>
}
