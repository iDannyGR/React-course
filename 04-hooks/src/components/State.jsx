import React, { useState, useEffect } from 'react';


const State = () => {
    const [first, setFirst] = useState(1);

    const handleButton = () => {
        setFirst(first + 1);
    };
    useEffect( ()=>  console.log(first) , [] )
  return (
      <div className='container text-center card-body'>
          <h1> UserState </h1>
          <hr />
          cuenta : {first}
          <button onClick={handleButton}> +1</button>
    </div>
  )
}

export default State



//useEffects nos sirve para cargar lo que queremos que se repita una sola vez
// y una unica vez se debe de ejecutar en un useEffects