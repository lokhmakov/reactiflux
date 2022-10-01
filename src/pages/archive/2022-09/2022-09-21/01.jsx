import * as React from 'react'

export default function Page() {
  React.useEffect(() => {
    function onKey(e) {
      console.log(`onKey`, e)
    }

    document.addEventListener(`keydown`, onKey)

    return () => {
      document.removeEventListener(`keydown`, onKey)
    }
  }, [])

  function _onKeyDown(e) {
    if (e.ctrlKey && e.key === `v`) {
      // Do something
    }
  }

  return <textarea onKeyDown={_onKeyDown} onChange={() => console.log} />
}
