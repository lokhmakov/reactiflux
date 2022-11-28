const objA = {a: 1, b: 2}
const objB = {a: 1, b: 2, c: 3}

const filter = (a, b) =>
  Object.keys(Object.assign({}, a, b)).reduce(
    (r, key) => (key in a && key in b ? r : (r[key] = a[key] || b[key]), r),
    {},
  )

const objDiff = filter(objA, objB)

console.log(objDiff) // => {c: 3}
