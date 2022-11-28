const check = (list) => list.every((v) => v === list[0])
const checkSet = (list) => 1 == new Set(list).size

console.log(checkSet([1, 1, 1, 1, 1, 1]))
