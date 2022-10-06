import logo from './logo-2.png';
//import Oval from './Shapes.js';
// import {
  
//   Text,
//   View,
 
// } from 'react';
import Typewriter from 'typewriter-effect' 
import React from 'react';

export default function Home(){
   
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Typewriter onInit={(typewriter) => {
            typewriter
            .typeString("Hello, my name is JARVIS.")
            .pauseFor(2000)
            .deleteAll()
            .typeString("How may I assist you?")
            
            .start();
          }} 
          />
         
          
          </header>
      </div>  
    );
}