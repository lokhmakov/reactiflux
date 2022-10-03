const list1 = [1, 2, 3, 4]
const list2 = [3, 4, 5, 6]

const compare = (list, item) => list.includes(item)
const compareById = (list, item) => list.some((v) => v.id === item.id)

const same = (a, b) => b.filter((v) => compare(a, v))

console.log(same(list1, list2)) // => [3, 4]
