// hooks
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
// store
import { store } from './store/store';
// components
import Router from './router/Router';
import GlobalTheme from './styles/Theme';

function App() {
    return (
        <Provider store={store}>
            <SnackbarProvider
                autoHideDuration={3000}
                maxSnack={3}
                preventDuplicate
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}>
                <GlobalTheme>
                    <Router />
                </GlobalTheme>
            </SnackbarProvider>
        </Provider>
    );
}

export default App;
