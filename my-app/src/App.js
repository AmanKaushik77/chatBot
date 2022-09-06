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
          Hi, I'm Jarvis, how may I assist you today?
        </p>
        <textarea> Enter Here </textarea>
      </header>
    </div>
  );
}

export default App;
