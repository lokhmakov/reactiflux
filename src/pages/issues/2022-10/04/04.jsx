function* range(a, b, step = 1) {
  for (; a <= b; a += step) yield a
}

console.log([...range(0, 10, 2)])
