// https://javascript.plainenglish.io/interviewer-can-a-1-a-2-a-3-ever-evaluate-to-true-in-javascript-d2329e693cde

function case1() {
  const a = {
    toString() {
      return 'medium'
    },
  }

  console.log(a == 'medium')
}

case1()

function case2() {
  const obj = {
    value: 1,
    valueOf() {
      return 2
    },
    toString() {
      return '3'
    },
    [Symbol.toPrimitive]() {
      return 4
    },
  }

  console.log(obj == 4)
}

case2()

function case3() {
  const a = {
    i: 1,
    valueOf() {
      return this.i++
    },
  }

  console.log(a == 1 && a == 2 && a == 3)
}

case3()

function case4() {
  const a = [1, 2, 3]
  a.join = a.shift

  console.log(a == 1 && a == 2 && a == 3)
}

case4()

// Run without strict
// function case5() {
//   let i = 1
//   with ({
//     get a() {
//       return i++
//     },
//   }) {
//     console.log(a == 1 && a == 2 && a == 3)
//   }
// }

function case6() {
  const a = {
    i: 1,
    [Symbol.toPrimitive]() {
      return this.i++
    },
  }

  console.log(a == 1 && a == 2 && a == 3)
}

case6()

function case7() {
  let _a = 1
  Object.defineProperty(window, 'a', {
    get() {
      return _a++
    },
  })

  console.log(a == 1 && a == 2 && a == 3)
}

case7()

function case8() {
  const a = new Proxy(
    {i: 1},
    {
      get(target) {
        return () => target.i++
      },
    },
  )

  console.log(a == 1 && a == 2 && a == 3)
}
