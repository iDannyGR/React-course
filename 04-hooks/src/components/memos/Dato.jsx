import { memo } from 'react';
//react memo recibe una funcion que puede ser un componente
//sirve para guardar en memoria y no renderizar con propagacion
const Dato = ({ value }) => {
  console.log('otra vez me cargue')
  return (
      <p>{ value }</p>
  )
}

export default memo(Dato)