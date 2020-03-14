import React from 'react';

//class App extends Component {
//  render() {
//    return (
//      <React.Fragment>
//        <label htmlFor="bar">
//          bar
//        </label>
//        <input type='text' onChange={() => {console.log("I'm clicked!")}} />
//      </React.Fragment>
//    )
//  }
//}

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!!</div>
}
//function App() {
//  return React.createElement(
//    "div",
//    null,
//    "Hello, world!"
//  )
//}

export default App;
