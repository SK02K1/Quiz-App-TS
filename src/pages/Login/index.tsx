import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { SyntheticEvent, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { loginFormFields, testCredentials } from 'utils';
import { FormFieldType } from 'types';
import { Spinner } from 'components';
import { useAuth } from 'contexts';
import { login } from 'services';

export const Login = () => {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [loginFormData, setLoginFormData] = useState<FormFieldType>({
    email: '',
    password: '',
  });

  const { user, setUser } = useAuth();
  const { email, password } = loginFormData;

  const inputChangeHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setLoginFormData((prevFormData) => ({
      ...prevFormData,
      [target.name]: target.value,
    }));
  };

  const fillTestCredentials = () => {
    setLoginFormData(testCredentials);
  };

  const loginHandler = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      setShowLoader(true);
      const { status, data } = await login({ email, password });
      if (status === 201) {
        setUser(data.user);
        toast.success(`Successfully logged in`);
      }
    } catch (error) {
      let errorMessage = '';
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = (error.response.data as AxiosError).message;
      } else {
        errorMessage = 'Failed to login';
      }
      toast.error(errorMessage);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <div>
      {user && <Navigate to='/' replace={true} />}
      <form onSubmit={loginHandler} className='form'>
        <h1 className='text-xl text-center m-xs-tb'>Login</h1>
        {loginFormFields.map((fieldInfo) => {
          const { id, label, name, type } = fieldInfo;
          return (
            <label className='m-sm-t' key={id}>
              <span className='m-sm-t'>{label}</span>
              <input
                className='input m-xs-t'
                onChange={inputChangeHandler}
                type={type}
                name={name}
                value={loginFormData[name]}
                placeholder={`Enter your ${name}`}
                required
              />
            </label>
          );
        })}
        <button className='btn btn-primary m-sm-tb' type='submit'>
          <Spinner showLoader={showLoader} />
          {!showLoader && 'Login'}
        </button>
        <button
          onClick={fillTestCredentials}
          className='btn btn-primary'
          type='button'
        >
          Use test credentials
        </button>
        <Link className='form-link m-sm-tb' to='/signup'>
          <span>Create new account</span>
          <span className='material-icons-outlined'> chevron_right </span>
        </Link>
      </form>
    </div>
  );
};
