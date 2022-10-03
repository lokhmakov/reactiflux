const range = (a, b) => Array.from({length: b - a + 1}, (_, i) => a + i)

console.log(range(10, 20))

function* gRange(a, b) {
  while (a <= b) yield a++
}

const range2 = (a, b) => [...gRange(a, b)]

console.log(range2(10, 20))
