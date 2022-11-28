const list1 = [`a`, `b`, `c`]
const list2 = [`d`, `e`, `f`]
const list3 = [`$`, `!`, `#`]

const passwordsFactory =
  (lists, a = [].concat(...lists)) =>
  (length) =>
    Array.from({length}, () => a[((Math.random() * a.length) | 1) - 1]).join``

const make = passwordsFactory([list1, list2, list3])

console.log(make(10))
