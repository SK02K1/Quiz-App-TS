import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useTheme } from 'contexts';
import { Navbar } from 'components';
import { Home } from 'pages';

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App app-${theme}`}>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
