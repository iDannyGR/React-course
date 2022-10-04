import React,{useState} from 'react'

const Custom = () => {
    
  return (
      <>
          <h1>custom hook: {counter}</h1>
          <hr />
          <button onClick={increment}> +1</button>
          <button onClick={decrement}> -1</button>
    </>
  )
}

export default Custom