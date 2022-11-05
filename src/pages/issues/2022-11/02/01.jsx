export const buildPurposeFromPlacesType = (input) => {
  for (let i = 0; i < matching.length; i++) {
    if (input.includes(matching[i].input)) {
      return {
        output1: matching[i].output1,
        output2: matching[i].output2,
      }
    } else {
      console.log("didn't find types", types)
      return null
    }
  }
}

const matching = [
  {input: 'rv_park', output1: 'sleep', output2: 'parking spot'},
  {input: 'lodging', output1: 'sleep', output2: 'room'},
  {input: 'campground', output1: 'sleep', output2: 'campsite'},
]

const input = ['bar', 'lodging', 'point_of_interest', 'establishment']

const mapValue = (r) => (r ? {output1: r.output1, output2: r.output2} : r)
const safeMap = (value, fn) => (value ? fn(value) : value)
const search = (list, inputs, mapFn = mapValue) =>
  safeMap(
    list.find((o) => inputs.includes(o.input)),
    mapFn,
  )

console.log(search(matching, input))
console.log(search(matching, input, (r) => r.output2))
