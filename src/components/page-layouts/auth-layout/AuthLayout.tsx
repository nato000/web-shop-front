import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  title: string;
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <div className='auth_page'>
      {/* <Logo type={'Color'} /> */}
      <h1 className='title'>{title}</h1>
      {children}
    </div>
  );
};

export default AuthLayout;
