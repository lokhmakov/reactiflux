const arr1 = [
  {id: 1, name: `foo`},
  {id: 2, name: `bar`},
]
const arr2 = [
  {id: 1, age: 22},
  {id: 2, age: 33},
]
const arr3 = [
  {id: 2, surname: `baz`},
  {id: 3, surname: `fizz`},
]

const getKey = (v) => v.id
const indexByKey = (source, a) =>
  a.reduce((r, v) => {
    const key = getKey(v)
    r[key] = Object.assign({}, v, r[key])
    return r
  }, source)

const merge = (...arrays) => Object.values(arrays.reduce(indexByKey, {}))

console.log(merge(arr1, arr2)) // => [{"id":1,"age":22,"name":"foo"},{"id":2,"age":33,"name":"bar"}]

console.log(merge(arr1, arr2, arr3)) // => [{"id":1,"age":22,"name":"foo"},{"id":2,"surname":"baz","age":33,"name":"bar"},{"id":3,"surname":"fizz"}]
