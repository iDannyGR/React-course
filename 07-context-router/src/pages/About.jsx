import React, {useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='container text-center mt-5'>
      {!user ?
        <h2 className='text-danger'>Please logIN</h2>:
        (<h2>{user.data.first_name} {user.data.last_name}</h2>)}
    </div>
  )
};

export default About;