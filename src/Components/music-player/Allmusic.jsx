import React, { createContext } from 'react'
import myContext from './Mycontext'
import Musicsong from './Musicsong'
import bhut from "./Bahut-Pyaar-Tumse-Karta-Hai-Dil.mp3";
import chandani from "./Chandni-Sachet-Tandon.mp3";
import Heeriye from "./Heeriye-Arijit-Singh.mp3"


const Allmusic = () => {

  const allsongdata = [
    {
      id:"0",
      songname:"Bahut Pyaar Tumse Karta Hai Dil",
      audiosong:bhut
    },
    {
      id:"1",
      songname:"Chandni Sachet Tandon",
      audiosong:chandani
    },
    {
      id:"2",
      songname:"Heeriye-Arijit-Singh.mp3",
      audiosong:Heeriye
    }
  ]
  return (
    <div>
        <myContext.Provider value={allsongdata} >
             <Musicsong />  
        </myContext.Provider>

    </div>
  )
}

export default Allmusic