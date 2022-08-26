import './ProfileCard.css';
import { useAuth } from 'contexts';

export const ProfileCard = () => {
  const { user } = useAuth();
  const { name, email } = user ?? {};
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
        <button className='btn btn-danger m-xs-tb'>Logout</button>
      </div>
    </div>
  );
};
