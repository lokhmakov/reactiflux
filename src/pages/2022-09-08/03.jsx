import * as React from 'react'

export default function Page() {
  return <FormAddress />
}

class FormAddress extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      readonly: true,
      adressSelected: false,
      open: true,
    }
  }

  setOpen = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <button className="t2y-btn-primary my-2" onClick={this.setOpen}>
        Got it ({this.state.open ? `yes` : `no`})
      </button>
    )
  }
}

const Birthday = () => {
  const clearAll = () => {
    setState([])
  }
  const [curState, setState] = useState(data)
  const remove = (id) => {
    setState((prev) =>
      prev.filter((v) => {
        return v.id !== id
      }),
    )
  }
  return (
    <>
      <button onClick={() => clearAll}></button>
      {curState.map((person, index) => {
        let {id, name, age, img} = person

        return (
          <>
            <div key={person.id.toString() + index}>
              <img src={img} alt="" />
              <h2> {name} </h2>
              <h2> {age} </h2>
              <button onClick={() => remove(id)}>Delete</button>
            </div>
          </>
        )
      })}
    </>
  )
}
