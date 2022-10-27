import React, { useReducer } from 'react'
import { ContactsReducer } from '../reducers/ContactsReducer'
import FormAdd from './FormAdd'
import TableContacts from './TableContacts'
const contacts = [{
    id: "456431",
    name: "Jorge",
    number: '4512354',
}, {
    id: "446431",
    name: "Jerardo",
    number: '1154223',
    }];
    
    const Contacts = () => {
        const [state, dispatch] = useReducer(ContactsReducer, contacts);
 
      return (
      <div className='container mt-3'>
              <FormAdd dispatch={ dispatch } />
              <TableContacts contacts={state} dispatch={ dispatch } />
      </div>
  )
}

export default Contacts