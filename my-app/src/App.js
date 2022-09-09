
import './App.css';
import NavBar from './NavBar';
import Home from './pages/Home';
import Why from './pages/Why';
import About from './pages/About';




function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home />;break
    case "/Why": 
      component = <Why />; break
    case "/About": 
      component = <About />; break
  }
  return( 
    <>
    <NavBar /> {component}
    
    </>
    );
}

export default App;
