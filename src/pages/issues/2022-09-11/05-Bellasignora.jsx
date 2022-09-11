import * as React from 'react'

const inputs = [
  {
    id: 1,
    name: `code`,
    label: 'Code',
    type: 'text',
    placeholder: 'Enter the code',
  },
  {
    id: 2,
    name: `article`,
    label: 'Article',
    type: 'text',
    placeholder: 'Enter the Article',
  },
]

export default function Page() {
  const [data, setData] = React.useState({
    code: '',
    article: '',
  })

  console.log(`Page`, data)

  const makeOnChange = (name) => (e) => {
    setData((prev) => ({...prev, [name]: e.target.value}))
  }

  return inputs.map((input) => (
    <div className="formInput" key={input.id}>
      <label>{input.label} </label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        onChange={makeOnChange(input.name)}
        id={input.label}
        name="data"
        value={data[input.name]}
      />
    </div>
  ))
}
