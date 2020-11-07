import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 

import './App.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
