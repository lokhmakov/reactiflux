import styled from 'styled-components'

export default function App() {
  return <Layout>Layout</Layout>
}

const Layout = styled.div`
  & :where(section, article, aside) :where(h2, h3) {
    color: red;
  }
`
