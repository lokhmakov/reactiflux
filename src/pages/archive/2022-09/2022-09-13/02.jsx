import * as React from 'react'

export default function Page() {
  return <Frame height={10} />
}

function Frame({height}) {
  return <iframe height={height} />
}
