import React, { useReducer,useEffect } from 'react'
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
        
      return (
      <div className='container mt-3'>
              <FormAdd dispatch={ dispatch } />
              <TableContacts contacts={state} dispatch={ dispatch } />
      </div>
  )
}

export default Contacts