import React, { useRef } from 'react'

const Ref = () => {
  const Ref = useRef(null);
  const handleRef = () => {
    Ref.current.value = 'pinga loca mamona';
    Ref.current.select()
    console.log(Ref)
  };
  return (
    <>
      <h1 onClick={handleRef}>Ref</h1> 
      <hr />
      <textarea ref={Ref} placeholder='escribe un mensaje' ></textarea>
    </>
  )
}

export default Ref