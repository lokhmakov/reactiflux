// https://twitter.com/codewithshripal/status/1574715355527880706?t=dHVlGSy57lQwxLsu8repuA&s=19

import styled from 'styled-components'

const level1 = [`section`, `article`, `aside`, `div`]
const level2 = [`h1`, `h2`, `h3`]

const level1Map = (fn) => level1.map((L1, key) => <L1 key={key}>{fn(L1)}</L1>)

const level2Map = (parentName) =>
  level2.map((L2, key) => <L2 key={key}>{`${parentName} - ${L2}`}</L2>)

export default function App() {
  return <Layout>{level1Map(level2Map)}</Layout>
}

const Layout = styled.div`
  & :where(section, article, aside) :where(h2, h3) {
    color: red;
  }
`
