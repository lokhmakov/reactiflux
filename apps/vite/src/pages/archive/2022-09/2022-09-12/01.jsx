import * as React from 'react'
import styled from 'styled-components'

export default function Page() {
  return (
    <Layout>
      <div>
        <span>0</span>
        <span>1</span>
        <span>2</span>
      </div>
      <div>
        <span>0</span>
        <span>1</span>
      </div>
      <div>
        <span>0</span>
        <span>1</span>
        <span>2</span>
      </div>
    </Layout>
  )
}

const Layout = styled.div`
  div:nth-child(odd) span:not(:first-child) {
    padding-left: 0.2rem;
  }
`
