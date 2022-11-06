import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from './Router';
import 'react-toastify/dist/ReactToastify.css';
/*React Redux config*/
import { Provider } from 'react-redux';
import store from './app/store';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(/** @type {HTMLElement} */ (document.getElementById('root')));

const queryClient = new QueryClient();

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Router />
			</Provider>
		</QueryClientProvider>
		<ToastContainer position="bottom-right" />
	</React.StrictMode>,
);
