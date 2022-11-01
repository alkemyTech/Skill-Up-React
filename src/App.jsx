import React from "react";
import "./App.css";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-ct-primary-400">
        <img src={"./alkemy_logo.svg"} className="App-logo" alt="logo" />
        <Heading as="h2">Bienvenido a AlkyBank</Heading>

        <Text as="a" variant="lead">
          Nos expandimos para estar al alcance en todo momento
        </Text>
      </header>
    </div>
  );
}

export default App;
