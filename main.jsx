import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './style.css';
// StrictMode is deliberately omitted so the mount demonstration logs once.
createRoot(document.getElementById('root')).render(<App/>);
