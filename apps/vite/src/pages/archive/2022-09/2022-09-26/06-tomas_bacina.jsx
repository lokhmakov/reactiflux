const subCategoryList = Array.from({length: 10}, (_, id) => ({
  id,
  name: `name ${id}`,
}))

const getNameById = (list, id) => list.find((v) => v.id === id)?.name

console.log(getNameById(subCategoryList, 1)) // => name 1
console.log(getNameById(subCategoryList, 2)) // => name 2
console.log(getNameById(subCategoryList, 3)) // => name 3
console.log(getNameById(subCategoryList, 25)) // => undefined
