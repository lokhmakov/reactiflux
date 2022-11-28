import * as React from 'react'

// const querySelectorWithDepth = (selectorParent, selector, not = 'form') =>
//   [
//     `${selectorParent} > :not(${not}) ${selector}`,
//     `${selectorParent} > ${selector}`,
//   ].reduce((r, v) => r.concat(...(document.querySelectorAll(v) || [])), [])

// const querySelectorWithDepth = (selectorParent, selector, not = ':not(form)') =>
//   document.querySelectorAll(
//     `${selectorParent} ${not} ${selector}, ${selectorParent} > ${selector}`,
//   )

function* evaluteNodes(result, node) {
  while ((node = result.iterateNext())) yield node
}

const evaluate = () => [
  ...evaluteNodes(
    document.evaluate(
      `//form[@data-form="Form1"]//input[not(ancestor::form[@data-form="Form2"])]`,
      document,
      null,
      XPathResult.ANY_TYPE,
      null,
    ),
  ),
]

export default function App() {
  React.useEffect(() => {
    console.log(evaluate())
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
      <div>
        <div>
          <div>
            <div>
              <form className=".form" data-form="Form2">
                <div>
                  <input id="i3" />
                </div>
                <input id="i4" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <input id="i5" />
    </form>
  )
}
