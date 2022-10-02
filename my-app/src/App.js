
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Why from './Why';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';



function App() {
  //let component
  // switch(window.location.pathname){
  //   case "/":
  //     component = <Home />;break
  //   case "/Why": 
  //     component = <Why />; break
  //   case "/About": 
  //     component = <About />; break
  // }
  return( 
    <Router>
      <NavBar/>
        <Routes>

          <Route path="/" element={<Home />} />
            <Route
            path="Why"
            element={
                <Why/>
            }
            />
            <Route
            path="About"
            element={
                <About/>
            }
            />
        </Routes>
    </Router>
    );
}

export default App;
