export default function App() {
  return <div>App</div>
}

const list = [
  {id: 1, title: 'Apple', description: 'Description of post 1'},
  {id: 2, title: 'Orange', description: 'Description of post 2'},
  {id: 3, title: 'Guava', description: 'Description of post 3'},
  {id: 4, title: 'Banana', description: 'Description of post 4'},
]
const fruits = ['Apple', 'Guava']

const result = list.filter((v) => fruits.includes(v.title))

console.log(JSON.stringify(result, null, 2))

/*
[
  {
    "id": 1,
    "title": "Apple",
    "description": "Description of post 1"
  },
  {
    "id": 3,
    "title": "Guava",
    "description": "Description of post 3"
  }
]
*/
