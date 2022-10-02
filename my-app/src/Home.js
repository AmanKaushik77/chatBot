import logo from './logo-2.png';
//import Oval from './Shapes.js';
// import {
  
//   Text,
//   View,
 
// } from 'react';
import React from 'react';

export default function Home(){
   
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            Hello, my name is <strong> Jarvis! </strong>, How may I assist you today?
          </p>
          
          </header>
      </div>  
    );
}