import React from 'react';

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "hanako",
      age:9
    },
    {
      name: "okodo"
    }
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
      <Cat />
      <User name={'Taro'} age={10}/>
      <User name={'Hanako'} age={9}/>
    </div>
  )
}

const Cat = () => {
  return <div>Meow!!</div>
}

const User = (props) => {
  return <div>Meow! {props.name}, your age is {props.age}</div>
}

User.defaultProps = {
  age:1
}

export default App;
