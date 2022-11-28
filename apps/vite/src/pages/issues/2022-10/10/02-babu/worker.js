export default () => {
  // eslint-disable-next-line no-restricted-globals
  self.addEventListener(`message`, ({data}) => {
    const fns = {
      success() {
        return {message: `Success`}
      },

      failure() {
        return {message: `Failed`}
      },
    }

    const fn = fns[data?.type]
    if (fn) {
      return postMessage(fn())
    }

    postMessage({message: `Unknown message`})
  })
}
