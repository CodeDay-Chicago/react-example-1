import React from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  render () {
    return (
      <button onClick={() => this.setState({ number: this.state.number + 1 })}>
        {this.state.number}
      </button>
    )
  }
}

ReactDOM.render(
  <MyComponent />
  , document.getElementById('root')
)
