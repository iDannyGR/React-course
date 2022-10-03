import { useEffect, useState } from "react";

const Effects = () => {
    const [users, setUsers] = useState([]);
    const [id, setId] = useState(null);
  
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => { setUsers(data); })
    },[])

    useEffect(() => { 
        console.log(users)
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault();
        setId(0)
    };
 
  return (
      <>
          <h1>Effects</h1>
          <hr />
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
            <input value={id} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default Effects