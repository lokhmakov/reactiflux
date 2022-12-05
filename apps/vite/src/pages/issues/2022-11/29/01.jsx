import * as React from 'react'

export default function App() {
  return <Square name="My button" />
}

class Square extends React.Component {
  click = () => console.log(this.props)

  render() {
    return <div onClick={this.click}>click me</div>
  }
}
