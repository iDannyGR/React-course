import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState("");
    const petition = async () => {
        const Key = 'client_id=TUBqWb2LqAFh7QZ7_JR0XMT90rMcT4FSoBKoIDh5aso'
        const endPoint =`https://api.unsplash.com/photos?${input}&${Key}`;
        const res = await fetch(endPoint)
        const data = await res.json();
        setImages(data);
    }
    useEffect(() => {
        petition();
        
        }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value; 
        setInput(text);
    }    
  return (
      <>
          <form onSubmit={handleSubmit}>
              <label> Buscar: <input type="text" name='inputText' /></label>{''}
          </form>
          <hr />
          {
              images.map((img) => { return <Card key={ img.id } img={img.urls.regular} /> })}
          
      </>
  )
}

export default Cards