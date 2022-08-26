import './App.css';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Profile, Signup } from 'pages';
import { Navbar, RequiresAuth } from 'components';
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
        {/* Private Routes */}
        <Route element={<RequiresAuth />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
