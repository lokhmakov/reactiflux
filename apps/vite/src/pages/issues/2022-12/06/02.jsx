export default function App() {
  return null
}

const list = [['ceb21ceb-b8fd-4f4e-a705-33aa14c7bfcb', 'Junior']]

const normalize = (list) => list.map(([uuid, value]) => ({uuid, value}))

console.log(normalize(list))
