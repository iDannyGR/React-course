import React, { useState} from 'react'
import Inputs from './Inputs';
import './Inputs.css'
import Results from './Results';

const Calc = () => {
  const [suma, setsuma] = useState(0);

  return (
      <div>
        <Inputs  name="Numero 1"/>
          <Inputs name="Numero 2" />
          <Results operacion='Suma' calculo={suma} />
          <Results operacion='Resta' calculo={suma} />
          <Results operacion='Multiplicacion' calculo={suma} />
          <Results operacion='division' calculo={suma} />
      </div>
  )
}

export default Calc