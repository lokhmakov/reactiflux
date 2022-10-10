import styled from 'styled-components'
import {faker} from '@faker-js/faker'

export default function App() {
  return <Trim text={faker.lorem.lines(1)} />
}

const Trim = ({text}) => {
  const half = (text.length / 2) | 1
  const start = text.slice(0, half)
  const end = text.slice(half)

  return <Text data-start={start} data-end={end} />
}

const Text = styled.span`
  &::before,
  &::after {
    display: inline-block;
    max-width: 50%;
    overflow: hidden;
    white-space: pre;
  }

  &::before {
    content: attr(data-start);
    text-overflow: ellipsis;
  }

  &::after {
    content: attr(data-end);
    text-overflow: clip;
  }
`
