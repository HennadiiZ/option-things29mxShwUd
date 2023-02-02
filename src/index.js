import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DataContextProviders } from './_store/data-context';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProviders>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataContextProviders>
);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// reportWebVitals();
