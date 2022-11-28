const list = [
  {
    name: 'United States of America',
    statesProvinces: [
      {
        name: 'Alabama',
        abbrev: 'AL',
      },
      {
        name: 'Alaska',
        abbrev: 'AK',
      },
    ],
  },
  {
    name: 'Canada',
    statesProvinces: [
      {
        name: 'Alberta',
        abbrev: 'AB',
      },
      {
        name: 'British Columbia',
        abbrev: 'BC',
      },
    ],
  },
]

const compare = (name) => (current) => name === current.name
const mapValue = (country) => country?.statesProvinces.map((v) => v.name)
const find = (
  list,
  compareFn = compare('United States of America'),
  mapValueFn = mapValue,
) => mapValueFn(list.find(compareFn)) || []

console.log(find(list)) // => ['Alabama', 'Alaska']
console.log(find(list, compare(`Canada`))) // => ['Alberta', 'British Columbia']
console.log(find(list, compare(`Africa`))) // => []
