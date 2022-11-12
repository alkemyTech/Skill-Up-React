import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import AuthContextProvider from "./context/loginContext.jsx";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode> */}
      <Router>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Router>
    {/* </React.StrictMode> */}
  </>
);
