import './Navbar.css';
import { Link } from 'react-router-dom';
import { useTheme } from 'contexts';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className='navbar avoid-text-highlight'>
      <div className='logo'>
        <Link className='text-2xl' to='/'>
          Quizzz
        </Link>
      </div>
      <div className='nav-controls'>
        <span
          aria-label='Toggle app theme'
          title='Toggle app theme'
          onClick={toggleTheme}
          className='btn-theme-toggle material-symbols-rounded'
        >
          {theme === 'dark' ? 'light' : 'dark'}_mode
        </span>
        <Link to={`/`}>
          <span className='material-symbols-rounded m-sm-l icon-user'>
            {
              // user
              true ? 'account_circle' : 'login'
            }
          </span>
        </Link>
      </div>
    </nav>
  );
};
