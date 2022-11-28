import '@master/css'
import * as React from 'react'

const keywords = [`1`, `2`, `3`]

export default function App() {
  return (
    <>
      <div>{keywords.join(` `)}</div>
      <div>
        {keywords.map((word) => (
          <span className="p:1" key={word}>
            {word}
          </span>
        ))}
      </div>
    </>
  )
}
