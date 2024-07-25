import React, { ReactNode } from 'react';
import './authPage.css';

interface AuthLayoutProps {
  title: string;
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <div className='auth-page'>
      <div className='auth-wrapper'>
        {/* <Logo type={'Color'} /> */}
        <h1 className='title'>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
