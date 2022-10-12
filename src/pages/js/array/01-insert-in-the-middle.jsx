const insertWithMutation = (list, index, value) => list.splice(index, 0, value)

const insertWithoutMutation = (list, index, v) =>
  list.slice(0, index).concat(v, list.slice(index))

const a = [1, 2, 4]

console.log(insertWithoutMutation(a, 2, 3)) // => [1, 2, 3, 4]

insertWithMutation(a, 2, 3)
console.log(a) // => [1, 2, 3, 4]
