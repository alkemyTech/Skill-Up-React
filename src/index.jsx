import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './Redux/Store/index.js';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import AuthContextProvider from './context/loginContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
        <Router>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </Router>
    </React.StrictMode>
  </Provider>
);