import * as React from 'react'

export default function Page() {
  React.useEffect(() => {
    const c = new AbortController()

    const resultQuery = () => checkCoolDown(`Some result 100`, 100)
    const errorQuery = () => checkCoolDown(`Some result 200`, 200, true)

    createInterval(resultQuery, 1000, c.signal)
    createInterval(errorQuery, 1000, c.signal)

    return () => c.abort()
  }, [])

  return null
}

const delay = (ms) => new Promise((rs) => setTimeout(rs, ms))

async function checkCoolDown(result, waitMs = 100, error = false) {
  await delay(waitMs)
  if (error) {
    throw new Error(result)
  }
  return result
}

const createInterval = (promiseFn, ms, signal) => {
  const id = setInterval(() => {
    promiseFn().finally(() => {
      clearInterval(id)
    })
  }, ms)

  signal.addEventListener(`abort`, () => clearInterval(id))
}
