import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { userData } from '../helpers/userData';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogin = () => {
    setUser(userData);
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <h1> home screen</h1>
      {
        !user ?
        <button className='btn btn-primary' onClick={handleLogin}>login</button>
          :
        <button className='btn btn-danger' onClick={handleLogout}>logout</button>  
      }
    </div>
  );
};

export default Home;