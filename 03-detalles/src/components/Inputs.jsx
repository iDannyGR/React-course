import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Results from './Results';
import { Operators } from '../helpers/Operators';
const Inputs = () => {
  const [numeros, setNumeros] = useState({
    numero1: 1,
    numero2: 1
  })
  const {handleChange, sum, res, mul, div, numero1, numero2} = Operators(numeros, setNumeros)
   return (
    <Fragment>
      <label>
          Numero 1 = <input className='form-control' name='numero1' value={numero1} onChange={handleChange} type="number" />
      </label>
      <label>
          Numero 2 = <input className='form-control' name='numero2' value={numero2} onChange={handleChange} type="number" />
      </label>
      <br />
      <h2>Operaciones/Resultado</h2>
      <Results operacion='Suma' calculo={sum()} />
      <Results operacion='Resta' calculo={res()} />
      <Results operacion='Multiplicacion' calculo={mul()} />
      <Results operacion='Division' calculo={div()} />
    </Fragment>
     
  )
}

Inputs.propTypes = {
    name : PropTypes.string
 }

export default Inputs