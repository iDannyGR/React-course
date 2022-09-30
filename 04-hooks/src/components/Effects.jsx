
import { useEffect, useState } from "react";

const Effects = () => {
    const [users, setUsers] = useState([]);

  
    useEffect(() => {
        async function getData() { 
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json()
        setUsers(data)
        };
       getData()
    }, []);
    console.log(users)

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
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default Effects