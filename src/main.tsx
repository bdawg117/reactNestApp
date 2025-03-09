import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // or any global styles you may have
console.log(document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
