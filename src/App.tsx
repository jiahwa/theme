import React from "react";
import logo from './logo.svg';
import './App.css';
import ConfettiGenerator from "confetti-js";
import Cay from "./features/templates/Cay";

function App() {
  // React.useEffect(() => {
  //   const confettiSettings = { id: 'my-canvas' };
  //   const confetti = new ConfettiGenerator(confettiSettings);
  //   confetti.render();

  //   return () => confetti.clear();
  // }, []) // add the var dependencies or not
  return (
    <div className="App">
      <header className="App-header">
        <Cay />
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
      {/* <canvas id="my-canvas"></canvas> */}
    </div>
  );
}

export default App;
