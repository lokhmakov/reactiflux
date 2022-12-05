export default function app() {
  return null
}

const mergeValue = (map, key, value, mapValue) => {
  map[key] = mapValue(map[key] || {}, value)
  return map
}
const mergeBy = (list, mapIndex, mapValue) =>
  list.reduce((r, v) => mergeValue(r, mapIndex(v), v, mapValue), {})

const ourIndex = (v) => v.licenseNumber
const ourValue = (prevState, value) => ({
  licenseNumber: value.licenseNumber,
  document: (prevState.document || []).concat(value.file),
})

const list1 = [
  {
    licenseNumber: '12',
    licenseIndex: 0,
    file: {name: `1`},
  },
  {
    licenseNumber: '12',
    licenseIndex: 0,
    file: {name: `2`},
  },
  {
    licenseNumber: '13',
    licenseIndex: 0,
    file: {name: `3`},
  },

  {
    licenseNumber: '13',
    licenseIndex: 0,
    file: {name: `4`},
  },
]

const result = Object.values(mergeBy(list1, ourIndex, ourValue))

console.log(result)

/*
[
  {
    "licenseNumber": "12",
    "document": [
      {
        "name": "1"
      },
      {
        "name": "2"
      }
    ]
  },
  {
    "licenseNumber": "13",
    "document": [
      {
        "name": "3"
      },
      {
        "name": "4"
      }
    ]
  }
]
*/
