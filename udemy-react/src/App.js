import React from 'react';
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    {name: "Taro",age: 10},
    {name: "hanako",age:9},
    {name: "okodo"}
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Meow! {props.name}, your age is {props.age}</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
