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
  {
    id: 3,
    name: `price`,
    label: 'Price',
    type: 'number',
    placeholder: 'Enter the Price',
  },
]

const mapEventHandler = {
  text: (e) => e.target.value,
  number: (e) => e.target.valueAsNumber,
}

export default function Page() {
  const [data, setData] = React.useState({
    code: '',
    article: '',
    price: 0,
  })

  console.log(`Page`, data)

  const makeOnChange = (name, type) => (e) => {
    setData((prev) => ({...prev, [name]: mapEventHandler[type](e)}))
  }

  return inputs.map((input) => (
    <div className="formInput" key={input.id}>
      <label>{input.label} </label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        onChange={makeOnChange(input.name, input.type)}
        id={input.label}
        name="data"
        value={`${data[input.name]}` || ''}
      />
    </div>
  ))
}
