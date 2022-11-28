/*
__dirname is not defined

paralleljs trying to get access to __dirname in es modules
*/

import Parallel from 'paralleljs'

export default function App() {
  return (
    <div>
      <button onClick={() => console.log(`boop`)}>Boop</button>
      <button>Async</button>
      <button>Worker</button>
    </div>
  )
}

const p = new Parallel('forwards')

p.spawn((data) => {
  data = data.reverse()

  console.log(data) // logs sdrawrof

  return data
}).then((data) => {
  console.log(data) // logs sdrawrof
})
