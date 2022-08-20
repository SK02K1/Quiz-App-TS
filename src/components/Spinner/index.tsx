import './Spinner.css';
import { ClipLoader } from 'react-spinners';
import { useTheme } from 'contexts';

type PropsType = {
  showLoader: boolean;
};

export const Spinner = ({ showLoader }: PropsType) => {
  const { theme } = useTheme();

  const spinnerColor = theme === 'dark' ? '#fafafa' : '#202124';

  return showLoader ? (
    <div className='spinner-container'>
      <ClipLoader color={spinnerColor} size={20} speedMultiplier={3} />
    </div>
  ) : null;
};
