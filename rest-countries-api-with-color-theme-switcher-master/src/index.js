import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountriesProvider from './context/CountriesProvider';
import ThemeProvider from './context/ThemeProvider';

ReactDOM.render(
    <React.StrictMode>
        <CountriesProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </CountriesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
