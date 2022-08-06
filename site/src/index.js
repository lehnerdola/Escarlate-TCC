import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes'
import Common from './Common';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Common/>
  <Routes/>  
  </React.StrictMode>
);
