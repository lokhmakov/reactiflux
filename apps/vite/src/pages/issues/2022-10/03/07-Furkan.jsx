const burger = {cal: 10, sodium: 20, protein: 55}
const salad = {cal: 15, sodium: 30, fat: 5}

const sum = (a, b) =>
  Object.keys(b).reduce(
    (r, name) => ((r[name] = (r[name] || 0) + b[name]), r),
    a,
  )
const sumList = (list) => list.reduce(sum, {})

console.log(sumList([burger, salad])) // => {cal: 25, sodium: 50, protein: 55, fat: 5}
