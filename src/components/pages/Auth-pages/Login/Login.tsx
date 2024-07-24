import '../../../../App.css';
import { ILoginForm, LoginForm } from '../../../forms/LoginForm';
import AuthLayout from '../../../page-layouts/auth-layout/AuthLayout';

export const LoginPage: React.FC = () => {
  const LoginPageProps: ILoginForm = {
    buttonTitle: 'Login',
  };
  const title = 'Welcome!';
  return (
    <AuthLayout title={title}>
      <LoginForm {...LoginPageProps} />
    </AuthLayout>
  );
};
