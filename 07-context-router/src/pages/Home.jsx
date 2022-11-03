import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { userData } from '../helpers/userData';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogin = () => {
    setUser(userData);
  };
  return (
    <div>
      <h1> home screen</h1>
      {user && <h2>{user.data.first_name}</h2>}
      <button className='btn btn-primary' onClick={handleLogin}>login</button>
    </div>
  );
};

export default Home;