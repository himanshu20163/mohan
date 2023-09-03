import logo from './logo.svg';
import './App.css';
import Togglechange from './Components/Darkmode/Togglechange';

import {Routes,Route} from 'react-router-dom';
import Home from './Components/moham/Home';
// import Home from './Components/reactjs-urban/Home/Home';
// import Urbanrouting from './Components/reactjs-urban/Urbanrouting';
// import Photosearch from './Components/Photo-search/Photosearch';
// import Quiz from './Components/Quiz/Quiz'

function App() {
  return (
    <div className="App" style={{width:"100%"}}>
      {/* <Togglechange /> */}
      <Routes>
        <Route path="/" element={<Home />} ></Route>
      </Routes>
      
      {/* <Allmusic /> */}
      {/* <Home /> */}
      {/* <Urbanrouting /> */}

      
      {/* <Movieapp /> */}
       {/* <Photosearch /> */}
       {/* <Quiz /> */}
       {/* <Movieapp />  */}

       
    </div>
  );
}

export default App;
