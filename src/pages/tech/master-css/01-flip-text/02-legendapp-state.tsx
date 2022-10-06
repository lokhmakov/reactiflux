import '@master/css'
import el from '@master/style-element.react'
import {observable} from '@legendapp/state'

const $flip = observable(false)

export default function App() {
  return (
    <Layout>
      <TextFlip onClick={() => $flip.set((v) => !v)}>Aa</TextFlip>
      <TextFlip>Bb</TextFlip>
      <TextFlip>Cc</TextFlip>
    </Layout>
  )
}

const Layout = el.div`flex user-select:none`
const Text = el.div`font:96 font:heavy`
const TextFlip = el(Text)`
  ~transform|.3s
  ${() => ({'scaleX(-1)': $flip.get()})}
`
