const range = (a, b) => Array.from({length: b - a + 1}, (_, i) => a + i)

console.log(range(10, 20))

function* gRange(a, b) {
  while (a < b + 1) yield a++
}

console.log([...gRange(10, 20)])
