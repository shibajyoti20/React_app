import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Intro from './components/Intro'


function App() {
  return (
    <div className="App">
        <Greet />
        <Intro/>
    </div>
  );
}

export default App;
/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First React App.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/ 