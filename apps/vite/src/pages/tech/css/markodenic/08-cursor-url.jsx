// https://twitter.com/denicmarko/status/1575063847630938112?t=677b8ksKE_76mfxfymTuuQ&s=35
// https://quirksmode.org/css/user-interface/cursor.html

import styled from 'styled-components'

export default function App() {
  return <Layout className="h-full grid place-items-center">test</Layout>
}

const Layout = styled.div`
  cursor: url('https://quirksmode.org/css/pix/cursor_ppk.gif'), auto;
`
