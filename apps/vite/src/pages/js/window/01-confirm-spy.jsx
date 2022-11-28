const _confirm = globalThis.confirm.bind(globalThis)
globalThis.confirm = function (...args) {
  console.log('confirm was called!')
  _confirm(...args)
}
