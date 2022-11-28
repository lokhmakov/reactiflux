import * as React from 'react'

const MS_IN_YEAR = 1000 * 60 * 60 * 24 * 365.25
const getAge = (d) => ((Date.now() - d) / MS_IN_YEAR) | 1
const correctAge = (d) => getAge(d) < 120

export default function Page() {
  const [value, setValue] = React.useState()

  const valueDate = new Date(value)
  const isYounger120 = correctAge(valueDate)

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>Age: {valueDate ? getAge(valueDate) : `invalid date`}</div>
      <div>{isYounger120 ? `Younger than 120` : `Already an adult`}</div>
    </>
  )
}

// function main() {
//   const age = getAge(new Date())
//   const isYounger120 = correctAge(valueDate)

//   this.setState({
//     ...state,
//     fields: { ...state.fields, [fieldName]: value },
//     age,
//     isYounger120
//   })
// }
