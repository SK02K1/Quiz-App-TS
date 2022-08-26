import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home, Login, Signup } from 'pages';
import { Navbar } from 'components';
import { useTheme } from 'contexts';

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App app-${theme}`}>
      <Toaster position='top-center' />
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
