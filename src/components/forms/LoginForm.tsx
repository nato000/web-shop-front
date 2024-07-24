import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getUsersApi, userSignIn } from '../../api/auth.api';
import { useAppDispatch } from '../../utils/hooks';
import { login } from '../../redux/authState/authState.slice';
import { FormInput } from '../page-components/inputs/formInput/FormInput';
import { isEmailValid, isPasswordValid } from '../../utils/validation-schema';
import { Checkbox } from '../page-components/Checkbox/Checkbox';
import { AppButton } from '../page-components/buttons/Button';
import { AppLink } from '../page-components/links/Link';

export interface ILoginForm {
  buttonTitle: string;
}

interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm: React.FC<ILoginForm> = ({ buttonTitle }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ mode: 'all' });
  const notify = (error: string) => toast.error(`${error}`);

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await userSignIn(data);
      localStorage.setItem('accessToken', response.data.accessToken);
      const user = await getUsersApi();
      if (user) {
        dispatch(login(user.data));
      }
      navigate('/shop');
    } catch (error: any) {
      notify(error.response?.data?.message);
    }
  };
  const [shown, setShown] = React.useState(false);

  const isShown = shown ? 'text' : 'password';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='auth_form'>
      <FormInput
        label='email'
        type='email'
        placeholder='example@mail.com'
        register={register('email', isEmailValid)}
        error={errors.email && errors.email?.message}
      />
      <FormInput
        label='password'
        type={isShown}
        placeholder='password'
        register={register('password', isPasswordValid)}
        error={errors.password && errors.password?.message}
      />
      <Checkbox label='show password' onChange={() => setShown(!shown)} />
      <AppButton title={buttonTitle} type='submit' />
      <div className=''>
        <AppLink to='/forgot-password' title='Forgot password?' />
        <AppLink to='/sign-up' title='Dont have account?' />
      </div>
    </form>
  );
};
