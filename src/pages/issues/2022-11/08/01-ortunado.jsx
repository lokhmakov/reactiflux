import * as React from 'react'

// const querySelectorWithDepth = (selectorParent, selector, not = 'form') =>
//   [
//     `${selectorParent} > :not(${not}) ${selector}`,
//     `${selectorParent} > ${selector}`,
//   ].reduce((r, v) => r.concat(...(document.querySelectorAll(v) || [])), [])

const querySelectorWithDepth = (selectorParent, selector, not = ':not(form)') =>
  document.querySelectorAll(
    `${selectorParent} > ${not} ${selector}, ${selectorParent} > ${selector}`,
  )

export default function App() {
  React.useEffect(() => {
    console.log(querySelectorWithDepth(`[data-form="Form1"]`, `input`))
  }, [])

  return (
    <form id="form" className=".form" data-form="Form1">
      <div>
        <div>
          <div>
            <input id="i1" />
          </div>
        </div>
      </div>
      <div>
        <input id="i2" />
      </div>
      <form className=".form" data-form="Form2">
        <div>
          <input id="i3" />
        </div>
        <input id="i4" />
      </form>
      <input id="i5" />
    </form>
  )
}
