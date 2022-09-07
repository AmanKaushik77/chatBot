import logo from './logo-2.png';
import './App.css';
import NavBar from './NavBar';



function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, my name is <strong> Jarvis </strong>, how may I assist you today?
        </p>
        <textarea> Enter Here </textarea>
      </header>
    </div>  
  );
}

export default App;
