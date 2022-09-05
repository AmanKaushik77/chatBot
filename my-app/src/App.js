import logo from './logo-2.png';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, I'm Jarvis, how may I assist you today?
        </p>
        <textarea> Type here </textarea>
      </header>
    </div>
  );
}

export default App;
