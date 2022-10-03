const range1 = (a, b) => Array.from({length: b - a + 1}, (_, i) => a + i)

console.log(range1(10, 20))

function* gRange(a, b) {
  while (a <= b) yield a++
}

const range = (a, b) => [...gRange(a, b)]

console.log(range2(10, 20)) // => [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
