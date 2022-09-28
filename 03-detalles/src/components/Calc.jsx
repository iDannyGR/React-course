import React, { useState} from 'react'

const Calc = () => {
  const [suma, setsuma] = useState(0);

  return (
      <div>
          <label>
              Numero 1 : <input type="text" name="" id="" />
          </label>
          <label>
                  Numero 2 : <input type="text" name="" id="" />
          </label>
          <span>Suma :{suma} </span>
      </div>
  )
}

export default Calc