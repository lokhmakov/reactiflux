const set = (
  o,
  [a, ...b],
  v,
  _ = (o[a] = b.length ? set(Object.assign({}, o[a]), b, v) : v),
) => o

console.log(set({a: {c: 25, b: 2}}, [`a`, `b`, 'd', 'e', 'f'], 5)) // => {"a":{"c":25,"b":{"d":{"e":{"f":5}}}}}

console.log(
  JSON.stringify(set({a: {c: 25, b: 2}}, [`a`, `b`, 'd', 'e', 'f'], 5)),
)
