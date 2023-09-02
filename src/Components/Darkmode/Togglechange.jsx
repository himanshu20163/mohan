import React, { useState } from 'react'
import mycontext from './mycontext';
import Menu from './Menu';

const Togglechange = ({children}) => {

    const[state,SetState] = useState({
        "backgroundColor":"#fff",
        "color":"#000"
    });
  return (
    <div>
        <mycontext.Provider value={{state,SetState}}>
           <Menu />
        </mycontext.Provider>
    </div>
  )
}

export default Togglechange