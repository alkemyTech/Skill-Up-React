import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from './Router';

const root = ReactDOM.createRoot(/** @type {HTMLElement} */ (document.getElementById('root')));
root.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
);
