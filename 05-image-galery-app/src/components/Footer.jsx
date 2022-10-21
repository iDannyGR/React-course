import React from 'react'

const Footer = () => {
  return (
      <nav className="navbar navbar-dark bg-primary text-center color-white">{" "}
          <div className='container-fluid'>
              <p className='navbar-brand h1'>Di YS design - &copy;{new Date().getFullYear() }</p> 
          </div>
             
    </nav>
  )
}

export default Footer