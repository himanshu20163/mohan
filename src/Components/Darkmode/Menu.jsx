import React, { useContext, useEffect, useState } from 'react'
import mycontext from './mycontext'

const Menu = () => {
    const {state,SetState}  = useContext(mycontext);
    console.log(state);
    
    const[data,Setdata] = useState("light");

    useEffect(() => {
      
    }, [data])

    const colorchange = ()=>{
       if(data == "light"){
        Setdata("dark");
        SetState({
            "backgroundColor":"#000",
            "color":"#fff"
           })
       }
       else{
        Setdata("dark");
        SetState({
            "backgroundColor":"#fff",
            "color":"#000"
           })
       }
    }

  return (
    <div style={{backgroundColor:`${state.backgroundColor}`,color:`${state.color}`}}>
        <h5>Geekster</h5>
        <ul>
            <li>
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">Services</a>
            </li>
        </ul>
        <button onClick={colorchange}>
            
        </button>
    </div>
  )
}

export default Menu