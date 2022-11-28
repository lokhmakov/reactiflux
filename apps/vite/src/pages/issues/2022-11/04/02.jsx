const arr = [
  [
    {
      post: 'a',
    },
    {
      post: 'b',
    },
  ],
  [
    {
      post: 'c',
    },
  ],
  [undefined],
]

const filterList = (list) => list.flat().filter(Boolean)

console.log(filterList(arr)) // =>[{"post":"a"},{"post":"b"},{"post":"c"}]
