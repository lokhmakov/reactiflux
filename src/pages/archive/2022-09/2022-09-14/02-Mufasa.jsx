export default function Page() {
  return <>Page</>
}

const user= {name: 'daniel', age: 25, occupation: 'developer'}
const newUserChanges = {name: null, age: null, occupation: 'manager'}

const removeNull = (o) => Object.entries(o).reduce((r, [key, value]) => (value !== null ? r[key] = value : r, r), {})
const assign = (a, b, fn = removeNull) => Object.assign(a, fn(b))

console.log(JSON.stringify(assign(user, newUserChanges))) // => {"name":"daniel","age":25,"occupation":"manager"}
