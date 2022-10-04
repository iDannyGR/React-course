import { useEffect } from "react";

const Effects = () => {

    const [first, setfirst] = useState(0);


    useEffect(() => {
        window.addEventListener('mousemove', () => { 
            setfirst(first + 1)
            console.log('moviendose');
        })
    }, []);

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
                  <input onChange={e =>e.target.value } type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default Effects