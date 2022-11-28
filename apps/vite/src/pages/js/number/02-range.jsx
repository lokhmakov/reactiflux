const A = 5
const B = 12

function case1() {
  const range = (a, b) => Array.from({length: b - a + 1}, (_, i) => a + i)

  console.log(range(A, B))
}

function case2() {
  function* gRange(a, b) {
    while (a <= b) yield a++
  }

  const range = (a, b) => [...gRange(a, b)]

  console.log(range(A, B))
}

function case3() {
  const iRange = (a, b) => ({
    [Symbol.iterator]: () => ({
      next: () => (a <= b ? {value: a++} : {done: true}),
    }),
  })

  const range = (a, b) => [...iRange(a, b)]

  console.log(range(A, B))
}

function case4() {
  function* gRange(a, b, step = 1) {
    for (; a <= b; a += step) yield a
  }

  const range = (a, b, step) => [...gRange(a, b, step)]

  console.log(range(A, B, 3))
}

;[case1, case2, case3, case4].forEach((fn) => fn())
