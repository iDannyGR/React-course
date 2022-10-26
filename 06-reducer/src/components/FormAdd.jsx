import React from 'react'

const FormAdd = ({ dispatch }) => {
    const actionAdd = {
        type: 'add',
        payload: {
            id: '123456',
            name: 'jaume',
            number: '41426869'
        }
    }
    const handleAdd = () => { 
        dispatch(actionAdd)
    }
    return (
        <>
         
        <div className='container'>
          <label className='mx-1 d-grid gap-2'>
              Nombre: <input type="text" className='form-control' autoComplete='off'/>
          </label>
          <label className='mx-1 d-grid gap-2'>
              Numero: <input type="text" className='form-control' autoComplete='off'/>
          </label>
          <div className='mx-1 d-grid gap-2'>
              <button onClick={handleAdd} className='btn btn-info mt-2'>Agregar</button>
          </div>
    </div>
    </>
  )
}

export default FormAdd;