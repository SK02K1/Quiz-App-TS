import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { SyntheticEvent, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { FormFieldType, LocationProps } from 'types';
import { signupFormFields } from 'utils';
import { Spinner } from 'components';
import { register } from 'services';
import { useAuth } from 'contexts';

export const Signup = () => {
  const { user, setUser } = useAuth();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [signupFormData, setSignupFormData] = useState<FormFieldType>({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = signupFormData;

  const location = useLocation() as LocationProps;
  const from = location.state?.from?.pathname || '/';

  const inputChangeHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setSignupFormData((prevFormData) => ({
      ...prevFormData,
      [target.name]: target.value,
    }));
  };

  const signupHandler = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      setShowLoader(true);
      const { status, data } = await register({ name, email, password });
      if (status === 201) {
        setUser(data.user);
        toast.success(`${data.message}`);
      }
    } catch (error) {
      let errorMessage = '';
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = (error.response.data as AxiosError).message;
      } else {
        errorMessage = 'Failed to register';
      }
      toast.error(errorMessage);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <div>
      {user && <Navigate to={from} replace={true} />}
      <form onSubmit={signupHandler} className='form'>
        <h1 className='text-xl text-center m-xs-tb'>Signup</h1>
        {signupFormFields.map((fieldInfo) => {
          const { id, label, type, name } = fieldInfo;
          return (
            <label className='m-sm-t' key={id}>
              <span className='m-sm-t'>{label}</span>
              <input
                onChange={inputChangeHandler}
                className='input m-xs-t'
                type={type}
                name={name}
                value={signupFormData[name]}
                placeholder={`Enter your ${name}`}
                required
              />
            </label>
          );
        })}
        <button className='btn btn-primary m-sm-tb'>
          <Spinner showLoader={showLoader} />
          {!showLoader && 'Signup'}
        </button>
        <Link className='form-link m-xs-tb' to='/login'>
          <span>Already have account</span>
          <span className='material-icons-outlined'>chevron_right</span>
        </Link>
      </form>
    </div>
  );
};
