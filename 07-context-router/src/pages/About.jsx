import React from 'react'
import { UserContext } from '../contexts/UserContext'

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div>About</div>
    { user && <h2>{ user.data.firt_name }</h2>}
  )
};

export default About;