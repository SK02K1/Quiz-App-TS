import './Spinner.css';
import { ClipLoader } from 'react-spinners';

type PropsType = {
  showLoader: boolean;
};

export const Spinner = ({ showLoader }: PropsType) => {
  return showLoader ? (
    <div className='spinner-container'>
      <ClipLoader color={`#202124`} size={20} speedMultiplier={3} />
    </div>
  ) : null;
};
