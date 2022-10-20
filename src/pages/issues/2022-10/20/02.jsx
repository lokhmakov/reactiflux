import * as React from 'react'

export default function App() {
  const [users] = React.useState([
    {id: `id1`, username: `username 1`},
    {id: `id2`, username: `username 2`},
  ])

  return users.map((user) => (
    <UserField key={user.id} user={user} onChange={console.log} />
  ))
}

const UserField = ({user, onChange}) => {
  const label = getLabel(user)

  return (
    <label>
      <input
        type="checkbox"
        checked={user.id}
        onChange={useOnChange(onChange, label)}
      />
      <p>{label}</p>
    </label>
  )
}

const getLabel = (user) => user.username
const getText = (e) => e.target.nextSibling?.innerText
const useOnChange = (onChange, label, strangeWay) =>
  React.useCallback((e) => {
    if (strangeWay) {
      return onChange?.(getText(e))
    }
    onChange?.(label)
  }, [])
