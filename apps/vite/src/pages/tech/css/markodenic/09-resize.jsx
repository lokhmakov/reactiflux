// https://twitter.com/denicmarko/status/1575063847630938112?t=677b8ksKE_76mfxfymTuuQ&s=35

// Does not work

import {faker} from '@faker-js/faker'
import styled from 'styled-components'

export default function App() {
  return (
    <div>
      <Card className="p-4 bg-blue-300 resize">{faker.lorem.lines(10)}</Card>
      <Card className="p-4">{faker.lorem.lines(10)}</Card>
      <Card className="p-4">{faker.lorem.lines(10)}</Card>
      <Card className="p-4">{faker.lorem.lines(10)}</Card>
      <Card className="p-4">{faker.lorem.lines(10)}</Card>
    </div>
  )
}

const Card = styled.div``
