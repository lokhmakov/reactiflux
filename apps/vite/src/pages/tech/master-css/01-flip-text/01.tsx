import '@master/css'
import * as React from 'react'
import el from '@master/style-element.react'

export default function App() {
  const [value, setValue] = React.useState(false)

  return (
    <Layout>
      <TextFlip $flip={value} onClick={() => setValue((v) => !v)}>
        Aa
      </TextFlip>
    </Layout>
  )
}

const Layout = el.div`flex user-select:none`
const Text = el.div`font:96 font:heavy`
const TextFlip = el(Text)`
  ~transform|.3s
  ${(_) => ({'scaleX(-1)': _.$flip})}
`
