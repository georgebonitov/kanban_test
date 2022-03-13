import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/header'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);