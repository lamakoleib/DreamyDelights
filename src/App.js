

import Navbar from './Navbar';
import Home from './Home';
import PhotoGallery from './PhotoGallery';

import logo from './images/cake_contact.jpg'
import React, {useState} from 'react';



function App() {


  return (
    <div className="App">
      <Navbar/>

      <div className="content">
      <Home/>

      </div>
      
      
    </div>
  );
}

export default App;
