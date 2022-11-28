import * as React from 'react'

const options = ['no', 'yes']

export default function Page() {
  const [value, setValue] = React.useState(options[0])

  return (
    <>
      <Select value={value} onChangeValue={setValue} />
      <SectionImage isShiny={value} />
    </>
  )
}

function Select({value, onChangeValue}) {
  return (
    <select onChange={(e) => onChangeValue(e.target.value)} value={value}>
      {options.map((value, key) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}

function SectionImage({isShiny}) {
  return <div>{isShiny === 'yes' ? 'yes image' : 'no image'}</div>
}
