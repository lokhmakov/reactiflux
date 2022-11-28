export default function Page() {
  return null
}

let arr1 = [{'21-9': null}, {'22-9': '2.5'}, {'23-9': null}, {'24-9': null}]
let arr2 = [{'21-9': null}, {'22-9': null}, {'23-9': '5.5'}, {'24-9': null}]

const requiredArray = [
  {'21-9': null},
  {'22-9': '2.5'},
  {'23-9': '5.5'},
  {'24-9': null},
]

const groupByKey = (o, source) =>
  Object.entries(o).reduce(
    (r, [key, value]) => ((r[key] = r[key] || value), r),
    source,
  )
const groupList = (list, source = {}) =>
  list.reduce((r, v) => groupByKey(v, r), source)
const groupLists = (a, b) => groupList(a, groupList(b))
const entriesToArray = (a, b) =>
  Object.entries(groupLists(a, b)).map(([key, value]) => ({[key]: value}))

console.log(entriesToArray(arr1, arr2))

const dummyMerge = (a, b) =>
  a.map((o, i) => {
    const [key] = Object.keys(o)
    return key ? {[key]: o[key] || b[i][key]} : o
  })

console.log(dummyMerge(arr1, arr2))
