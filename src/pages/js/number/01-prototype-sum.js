// const sum = (...args) => args.reduce((a, b) => a + b)

// Number.prototype.sum = function (...args) {
//   return sum(this, ...args)
// }

// Number.prototype.sum = function (...args) {
//   return args.reduce((a, b) => a + b, this)
// }

Number.prototype.sum = function (n) {
  return this + n
}

console.log((5).sum(5).sum(10)) // => 20
