import { useEffect, useState } from "react";

const Effects = () => {

    const [first, setfirst] = useState(0);
    const event = (e) => console.log('moviendose');

    useEffect(() => {
        if (first === '123') { 
            window.addEventListener('mousemove', event)
        }
    
        return () => {
          console.log('detenido')
        window.removeEventListener('mousemove', event)
      }
    }, [first])
    



    const handleSubmit = (e) => {
        e.preventDefault();
    };
 
  return (
      <>
          <h1>Effects</h1>
          <hr />
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
                  <input onChange={(e) => setfirst
                      
                      (e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default Effects