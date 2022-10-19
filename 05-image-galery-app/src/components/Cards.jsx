import React, { useEffect, useState, useCallback } from 'react';
import Card from './Card';

const Cards = () => {
    const [images, setImages] = useState([]);
    const [input, setInput] = useState("");
    const petition = useCallback(
            async (endPoint = "") => {
                const key = 'client_id=TUBqWb2LqAFh7QZ7_JR0XMT90rMcT4FSoBKoIDh5aso'
                let route = `https://api.unsplash.com/photos?${key}`;
                if (input !== "") {
                    route = `https://api.unsplash.com/search/photos?per_page=50?page=1&query=${encodeURI(input)}&${key}`
                };
                const res = await fetch(route)
                const data = await res.json();
                (data.results) ? setImages(data.results) : setImages(data);
            }, [input])
    
    useEffect(() => {
        petition();
        }, [petition]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value; 
        setInput(text);
    }    
  return (
      <>
          <form onSubmit={handleSubmit}>
              <label className='p-3'> Buscar: <input type="text" name='inputText' /></label>{''}
          </form>
          <hr />
          <div className='row'>
              {images.map((img) => {
                  return <div  key={ img.id } className='col'>
                    <Card  img={img.urls.regular} />
            </div> })}
          </div>
          </>
  )
}

export default Cards