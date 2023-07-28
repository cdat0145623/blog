import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import { ContextProvider } from './context/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextProvider>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </ContextProvider>
    </React.StrictMode>,
);
