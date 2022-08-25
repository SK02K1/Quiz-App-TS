import ReactDOM from 'react-dom/client';

import App from './App';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, CategoriesProvider, ThemeProvider } from 'contexts';

axios.defaults.baseURL = 'https://hlbrv5.sse.codesandbox.io/';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
