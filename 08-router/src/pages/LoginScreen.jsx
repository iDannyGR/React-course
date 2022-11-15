import React from 'react';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';


const LoginScreen = () => {
  return (
      <div className='container mt-5 text-center'>
          <LoginForm />
          <Footer />
    </div>
  )
}

export default LoginScreen;