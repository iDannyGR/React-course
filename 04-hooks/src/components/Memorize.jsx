import React, { useState, useMemo, useCallback } from 'react';
import Dato from './memos/Dato';
import Btn from './memos/Btn';


const Memorize = () => {
    const [counter, setCounter] = useState(1);
    const [view, setView] = useState(true);
    const pesado = (ite) => {
        for (let i = 0; i < ite; i++) {
            console.log('pocessing');
        };
        return 'end of process';
    };
    const pesadoMemo = useMemo(() => pesado(counter), [counter]);

    //usecallback sirve para memorizar una funcion
    //pero ademas se debe de memorizar el modulo que afecta
    //este caso el btn
    const add = useCallback(() => {
        setCounter((actual) => actual +1);
     },[setCounter]);
  return (
      <>
          <h1>Memorizes : <Dato value= { counter} /> </h1>
          <hr />
          <pre>{pesadoMemo}</pre>
          <Btn add={ add } />
          <button onClick={() =>setView(!view)}>ver/quitar</button>
          </>
  )
}

export default Memorize