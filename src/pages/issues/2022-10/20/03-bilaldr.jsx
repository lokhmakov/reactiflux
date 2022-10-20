import * as React from 'react'

const checkList = [
  'users',
  'company',
  'process',
  'candidats',
  'roles',
  'candidatTypes',
  'employees',
  'fournisseur',
  'candidatProcess',
]

export default function App() {
  const [check, setCheck] = React.useState([])

  React.useEffect(() => {
    queryPermissions().then(setCheck)
  }, [])

  const onChange = ({target: {value}}) => {
    setCheck((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  return (
    <div className="App">
      <div className="list-container form-check mt-3">
        {checkList.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              value={item}
              checked={check.includes(item)}
              onChange={onChange}
            />
            <span className="form-check-label">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

async function queryPermissions() {
  const someStrangeTextPermissions = `["users", "company", "process"]`
  return JSON.parse(someStrangeTextPermissions)
}
