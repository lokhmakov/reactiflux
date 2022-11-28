export default function Page() {
  return null
}

const list = Array.from({length: 3}, () => Math.random())

function case1() {
  const begin = performance.now()

  const a = [undefined]
  for (var i = 0; i < list.length; i++) {
    if (list[i + 1] > list[i]) {
      a[i + 1] = 'CLB'
    } else if (list[i + 1] < list[i]) {
      a[i + 1] = 'DESC'
    } else {
      a[i + 1] = 'CRZ'
    }
  }

  console.log(`case1`, performance.now() - begin)
}

function case2() {
  const begin = performance.now()

  const a = list.map((v, i, a) => {
    console.log(v - a[i + 1])
    return v > a[i + 1] ? `DESC` : v < a[i + 1] ? `CLB` : `CRZ`
  })
  a.unshift(undefined)

  console.log(`case2`, performance.now() - begin)
}

function case3() {
  const begin = performance.now()

  const a = list.map((v, i, a, n = a[i + 1]) =>
    v > n ? `DESC` : v < n ? `CLB` : `CRZ`,
  )
  a.unshift(undefined)

  console.log(`case3`, performance.now() - begin)
}

function case4() {
  const a = list.map((v, i, a, n = a[i + 1]) =>
    v == n ? `CRZ` : v > n ? `DESC` : `CLB`,
  )
  a.unshift(undefined)
}

// case1()
case2()
// case3()
