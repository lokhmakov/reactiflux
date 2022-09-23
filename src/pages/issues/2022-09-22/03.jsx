export default function Page() {
  return null
}

const list = [
  {p1: 10, p2: 2, p3: 4},
  {p1: 130, p2: 12, p3: 14},
  {p1: 0, p2: 20, p3: 4},
  {p1: 10, p2: 21, p3: 4},
  {p1: 10, p2: 22, p3: 4},
]

const push = (map, key, value) => (
  (map[key] = map[key] || []), map[key].push(value), map
)
const pushEntries = (from, to) =>
  Object.entries(from).reduce((r, [key, value]) => push(r, key, value), to)
const groupByKeys = (list) => list.reduce((r, v) => pushEntries(v, r), {})

console.log(groupByKeys(list))
