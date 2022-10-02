const newActivity = {title: 1}

const fn = () => {
  const friendsActivity = 10

  console.log(newActivity) // => {title: 1}
  console.log({newActivity}) // => {newActivity: {title: 25}}
  console.log(JSON.stringify({newActivity})) // => {title: 1}
}

fn()

// newActivity.title = 25

// const exist = (list, item) => list.some((v) => v.type === item.type)

// setActivities((prevState) => ({
//   ...prevState,
//   [friendID]: exist(prevState)
// }))

const list = [
  {type: 1, value: `value1`},
  {type: 2, value: `value2`},
  {type: 3, value: `value3`},
]

const upsertList = (
  list = [],
  item,
  f = false,
  r = list.map((v) => (v.type === item.type ? ((f = true), item) : v)),
) => (f ? r : r.concat(item))

console.log(upsertList(list, {type: 2, value: `value4`})) // => [{"type":1,"value":"value1"},{"type":2,"value":"value4"},{"type":3,"value":"value3"}]
console.log(upsertList(list, {type: 5, value: `value4`})) // => [{"type":1,"value":"value1"},{"type":2,"value":"value2"},{"type":3,"value":"value3"},{"type":5,"value":"value4"}]

// const json = (v) => JSON.stringify(v)

// console.log(json(upsertList(list, {type: 2, value: `value4`})))
// console.log(json(upsertList(list, {type: 5, value: `value4`})))
