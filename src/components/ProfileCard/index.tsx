import './ProfileCard.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts';

export const ProfileCard = () => {
  const { user, setUser } = useAuth();
  const { name, email } = user ?? {};

  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate(-1);
  };

  return (
    <div className='profile-card'>
      <img
        className='avatar  m-xs-lr'
        src={`/assets/avatar.svg`}
        alt='avatar'
      />
      <div className='m-xs-lr'>
        <h2 className='text-xl m-xs-tb'>{name}</h2>
        <p className='m-xs-tb'>{email}</p>
        <button onClick={logout} className='btn btn-danger m-xs-tb'>
          Logout
        </button>
      </div>
    </div>
  );
};
