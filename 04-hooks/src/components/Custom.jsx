import {useCounter} from "../hooks/useCounter"


const Custom = () => {
  const [counter, increment, decrement] = useCounter(10,5);

  return (
      <>
          <h1>custom hook: {counter}</h1>
          <hr />
          <button onClick={increment}> +1</button>
          <button onClick={decrement}> -1</button>
    </>
  )
}

export default Custom