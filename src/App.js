import React,{useState,useEffect} from 'react';
import './App.css';
import {Routes,Route } from "react-router-dom";

import Pages from './components/Pages';
import Home from './components/Home';
import Page from './components/Page';
import Favourite from './components/Favourite';

function App() {
  const [dpost,setDpost]=useState({});
  const [fav,setFav]=useState([]); 
  
  useEffect(() => {
    console.log('Updated dpost:', dpost);
  }, [dpost]);
  return (
   
    <div className='App'>

    <Routes>
     <Route exact path='/' element={<Home/>} />
     <Route exact path='/posts' element={  <Pages setDpost={setDpost} />} />
     <Route exact path='/posts/:id' element={ <Page dpost={dpost} setFav={setFav} fav={fav} /> } />
     <Route exact path='/Favourites' element={ <Favourite fav={fav} setFav={setFav} setDpost={setDpost}/> } />
    </Routes>
   
    </div>
   
  );
}

export default App;
