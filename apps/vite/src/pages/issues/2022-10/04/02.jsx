export const a = [
  {
    id: '1',
    title: 'Title1',
    models: [
      {
        id: '123',
        title: 'Model1',
        value: 25,
      },
      {
        id: '1234',
        title: 'Model2',
        value: 6,
      },
    ],
  },
  {
    id: '2',
    title: 'Title2',
    models: [
      {
        id: '12345',
        title: 'Model3',
        value: 2,
      },
      {
        id: '12345',
        title: 'Model4',
        value: 15,
      },
    ],
  },
  {
    id: '3',
    title: 'Title2',
    models: [
      {
        id: '12345',
        title: 'Model3',
        value: 2,
      },
      {
        id: '12345',
        title: 'Model4',
        value: 15,
      },
      {
        id: '12345',
        title: 'Model4',
        value: 1,
      },
    ],
  },
]

const mapValue = (v) => v.value
const sort = (list) =>
  list.sort(
    (a, b) =>
      Math.min(...a.models.map(mapValue)) - Math.min(...b.models.map(mapValue)),
  )

console.log(sort(a))
