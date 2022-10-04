import React, { useLayoutEffect, useState} from 'react'

const Layout = () => {
    const [data, setdata] = useState([]);
    const effect = data.length;
    const newData = [{
        name: 'pacusin',
        email: 'pacusion@pacusin.com'
    },{
        name: 'pacusin',
        email: 'pacusion@pacusin.com'
    }
    ];
useLayoutEffect(() => {
  setTimeout(() => {
      setdata(newData);
  }, 5000);
}, [])

  return (
      <>
          <h1>UseLayoutEffect</h1>
          <hr />
          <p>Valores { effect }</p>
      </>
  )
}

export default Layout