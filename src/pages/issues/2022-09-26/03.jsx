const objA = {a: 1, b: 2, d: 3}
const objB = {a: 1, b: 2, c: 3}

const filter = (a, b) =>
  Object.keys(Object.assign({}, a, b)).reduce(
    (r, key) => (key in a && key in b ? r : (r[key] = a[key] || b[key]), r),
    {},
  )

console.log(filter(objA, objB)) // => {d: 3, c: 3}
