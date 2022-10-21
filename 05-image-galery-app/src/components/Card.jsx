import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ img }) => {
  return (
    <div className="card m-2" style={{
      width: "18rem",
      height: "20rem",
    }}>
          <img src={img} className="img-fluid h-100" alt="imagen png" />   
          </div> 
  )
}

Card.propTypes = {
    img:PropTypes.string,
}

export default Card