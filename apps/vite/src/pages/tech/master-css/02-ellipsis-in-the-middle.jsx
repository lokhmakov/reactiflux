import '@master/css'
import el from '@master/style-element.react'
import {faker} from '@faker-js/faker'

export default function App() {
  return <Trim text={faker.lorem.lines(1)} />
}

function Trim({text}) {
  const half = (text.length / 2) | 1
  const one = text.slice(0, half)
  const two = text.slice(half)

  return <Text data-one={one} data-two={two} />
}

const Text = el.span`
  {d:inline-block;max-w:50%;overflow:hidden;white-space:pre}::after
  {d:inline-block;max-w:50%;overflow:hidden;white-space:pre}::before
  
  {content:attr(data-one);text-overflow:ellipsis}::before
  {content:attr(data-two);text-overflow:clip}::after
`
