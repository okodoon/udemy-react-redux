import React, { Component } from 'react';

const App = () => (<Counter />)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  inclement = () => {
    console.log("inclement")
    const currentCount = this.state.count
    this.setState({ count: currentCount + 1})
  }

  declement = () => {
    console.log("inclement")
    const currentCount = this.state.count
    this.setState({ count: currentCount - 1})
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <div>count: { this.state.count }</div>
        <button onClick={this.inclement}>+1</button>
        <button onClick={this.declement}>-1</button>
      </div>
    )
  }
}

export default App;
