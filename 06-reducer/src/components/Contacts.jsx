import React, { useReducer,useEffect, useState } from 'react'
import { ContactsReducer } from '../reducers/ContactsReducer'
import FormAdd from './FormAdd'
import TableContacts from './TableContacts'
const init = () => {
    const info = localStorage.getItem('contacts');
    return info ? JSON.parse[info] : [] ;
};
    
    const Contacts = () => {
        const [state, dispatch] = useReducer(ContactsReducer, [], init)
        useEffect(() => {
            localStorage.setItem('contacts', JSON.stringify(state))
        }, [state])
        const [formView, setFormView] = useState(false);
          
      return (
          <div className='container mt-3'>
              <button
                  onClick={() => setFormView(!formView)}
                  className='btn btn-success mb-3'>{ formView ? ' - Cerrar' : '+Agregar Contacto'}</button>
              {
                formView && <FormAdd dispatch={dispatch} /> 
              }
              <TableContacts contacts={state} dispatch={ dispatch } />
      </div>
  )
}

export default Contacts