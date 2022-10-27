import React from 'react';
import { createRoot } from 'react-dom/client'; // replaces ReactDOM.render
import { BrowserRouter } from 'react-router-dom'; // use for routing
import App from './App';



// returns an object with a render function
const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  )
