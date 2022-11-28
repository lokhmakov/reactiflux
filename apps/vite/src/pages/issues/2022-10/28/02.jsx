const obj = {'aws-sit': ['aws-sit-welab', 'aws-sit-general']}
const required = [
  ['aws-sit', 'aws-sit-welab'],
  ['aws-sit', 'aws-sit-general'],
]

const make = (o) =>
  Object.entries(o).flatMap(([key, list]) => list.map((value) => [key, value]))

const log = (v) => console.log(JSON.stringify(v))
log(make(obj)) // => [["aws-sit","aws-sit-welab"],["aws-sit","aws-sit-general"]]
