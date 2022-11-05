import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from './Router';
/*React Redux config*/
import { Provider } from 'react-redux';
import reduxStore from './app/store';

const root = ReactDOM.createRoot(/** @type {HTMLElement} */ (document.getElementById('root')));
root.render(
	<React.StrictMode>
		<Provider store={reduxStore}>
			<Router />
		</Provider>
	</React.StrictMode>,
);

