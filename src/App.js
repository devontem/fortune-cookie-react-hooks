import React, {useState, useEffect} from 'react';
import cookie from './images/cookie.png';
import './App.css';

function App() {
  // creating local state variables
  let [allFortunes, setAllFortunes] = useState([]);
  let [currentFortune, setCurrentFortune] = useState(null);

  // fetching fortunes
  useEffect(() => {
    fetch('/fortunes.json')
      .then((res) => res.json())
      .then((data) => {
        setAllFortunes(data);
      })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={cookie} className="App-cookie" alt="cookie" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
