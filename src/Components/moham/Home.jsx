import React from 'react'
import Navmenu from './Navmenu'
import "./menu.css";

const Home = () => {
  return (
    <div style={{backgroundColor:"#000",padding:"20px 0px"}}>
        <Navmenu />
        <h1 style={{fontSize:"60px",textAlign:"center",color:"#fff"}}>get the<span style={{color:"blue"}}> right job<br/></span> you deserve</h1>
        <p style={{textAlign:"center",color:"#fff",padding:"20px 0px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, impedit consequatur hic nulla quos aspernatur</p>

    </div>
  )
}

export default Home