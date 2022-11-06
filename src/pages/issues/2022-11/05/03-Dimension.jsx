import * as React from 'react'

export default function App() {
  return <ManagedComponent />
}

const posts = [
  {id: `silver`, name: `Silver`},
  {id: `deepPurple`, name: `Deep Purple`},
  {id: `gold`, name: `Gold`},
]

const options = [
  {value: `128`, label: `128 ГБ`},
  {value: `256`, label: `256 ГБ`},
  {value: `512`, label: `512 ГБ`},
  {value: `1024`, label: `1 ТБ`},
]

const ManagedComponent = () =>
  posts.map((post) => <Card key={post.id} post={post} />)

function Card({post}) {
  const [value, setValue] = React.useState(options[0])

  const onSubmit = React.useCallback(() => {
    alert(`${post.id} and ${value}`)
  }, [value])

  return (
    <li key={post.id}>
      <h3>{post.name}</h3>
      <div className={post.sclass}>
        <form onSubmit={onSubmit}>
          <select
            name={post.id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <input className={post.cbtn} type="submit" value="Submit" />
        </form>
      </div>
    </li>
  )
}
