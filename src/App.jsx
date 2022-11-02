import React from "react";
import "./App.css";
import { Heading } from "./components/Heading";

import Tooltip from "./components/Heading/Tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-ct-primary-400">
        <Tooltip content="Test" status="success">
          <img src={"./alkemy_logo.svg"} className="App-logo" alt="logo" />
        </Tooltip>
        <Heading as="h2">Bienvenido a AlkyBank</Heading>
      </header>
    </div>
  );
}

export default App;
