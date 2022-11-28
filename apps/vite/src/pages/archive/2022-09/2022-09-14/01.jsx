import * as React from 'react'

export default function Page() {
  return <Input />
}

const MS_IN_YEAR = 1000 * 60 * 60 * 24 * 365.25
const getAge = (d) => ((Date.now() - d) / MS_IN_YEAR) | 0
const correctAge = (d) => getAge(d) < 120

class Input extends React.Component {
  state = {
    birthday: ``,
    valueDate: null,
    isYounger120: false,
  }

  onChangeBirthday = (e) => {
    const value = e.target.value
    const valueDate = new Date(value)
    this.setState({
      birthday: value,
      valueDate,
      isYounger120: correctAge(valueDate)
    })
  }

  render() {
    const {birthday, valueDate, isYounger120} = this.state

    return (
      <>
        <input value={birthday} onChange={this.onChangeBirthday} />
        <div>Age: {valueDate ? getAge(valueDate) : `invalid date`}</div>
        <div>{isYounger120 ? `Younger than 120` : `Already an adult`}</div>
      </>
    )  
  }
}