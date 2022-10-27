import React, { useState } from 'react';
import {v4 as uuid } from 'uuid';

const FormAdd = ({ dispatch }) => {
    const [data, setData] =  useState({name:'', number:''})
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const { name, number } = data;
    const actionAdd = {
        type: 'add',
        payload: {
            id: uuid(),
            name,
            number
        }
    }
    const handleAdd = () => { 
        dispatch(actionAdd)
    }
    return (
        <>
         
        <div className='container'>
          <label className='mx-1 d-grid gap-2'>
                    Nombre: <input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name='name'
                        className='form-control'
                        autoComplete='off' />
          </label>
          <label className='mx-1 d-grid gap-2'>
                    Numero: <input
                        onChange={handleChange}
                        value={number}
                        type="text"
                        name='number'
                        className='form-control'
                        autoComplete='off' />
          </label>
          <div className='mx-1 d-grid gap-2'>
              <button  onClick={handleAdd} className='btn btn-info mt-2'>Agregar</button>
          </div>
    </div>
    </>
  )
}

export default FormAdd;