import React from "react";
import Weather from "./Weather";

import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <header className="App-header">Weather Project</header>
        <Weather />
        <footer>
          This project was coded by Laura Zimunya and is
          <a
            href="https://github.com/ljzimunya"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
