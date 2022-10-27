import React from 'react'

const TableContacts = ({ contacts=[], dispatch }) => {
  const handleDelete = (id) => {
    const deleteAction =  { 
      type: 'delete',
      payload: id
    };
    dispatch(deleteAction)
  };
  return (
      <table className='table'>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Numero</th>
                  <th>Acciones</th>
              </tr>
          </thead>  
          <tbody>
              {contacts.map((contact) => {
                   return <tr key={contact.id}>
                     <th>{contact.id.split('-')[0].toUpperCase()}</th>
                      <td>{contact.name}</td>
                      <td>{contact.number}</td>
                      <td>
                       <button
                         onClick={() => handleDelete(contact.id)}
                         className='btn btn-danger'>Eliminar
                       </button>
                      </td>
                    </tr>
                   })
              }
          </tbody>
     </table>
  )
}

export default TableContacts