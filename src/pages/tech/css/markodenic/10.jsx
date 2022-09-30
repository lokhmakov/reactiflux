// https://markodenic.com/css-tips/

import styled from 'styled-components'

export default function Page() {
  return (
    <div className="flex">
      <Box />
      <Box>Content</Box>
    </div>
  )
}

const Box = styled.div`
  background-color: red;
  width: 5rem;
  height: 5rem;

  &:empty {
    background-color: blue;
  }
`
