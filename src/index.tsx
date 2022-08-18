import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://hlbrv5.sse.codesandbox.io/';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);