import React from "react";
import "./App.css";
import { Heading } from "./components/Heading";
import { SignInForm } from "./components/SignInForm/SignInForm";

function App() {
  return (
    <SignInForm />
    // <div className="App">
    //   <header className="App-header bg-ct-primary-400">
    //     <img src={"./alkemy_logo.svg"} className="App-logo" alt="logo" />
    //     <Heading as="h2">Bienvenido a AlkyBank</Heading>
    //   </header>
    // </div>
  );
}

export default App;
