import React from 'react'

export default useCounter = () => {
    const [counter, setCounter] = useState(5);
    const increment = () => { setCounter(counter + 1 )};
    const decrement = () => { setCounter(counter - 1 )};
 }