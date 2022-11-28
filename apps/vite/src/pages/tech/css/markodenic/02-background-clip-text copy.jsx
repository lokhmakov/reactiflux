// https://twitter.com/denicmarko/status/1575063847630938112?t=677b8ksKE_76mfxfymTuuQ&s=35

import styled from 'styled-components'
import {faker} from '@faker-js/faker'

export default function App() {
  return (
    <Layout>
      <Text>{faker.lorem.lines(10)}</Text>
    </Layout>
  )
}

const Layout = styled.div``

const Text = styled.div`
  background-image: url(https://picsum.photos/300/200);
  width: 300px;
  height: 200px;

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
`
