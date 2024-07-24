import React from 'react';
import { Link } from 'react-router-dom';

interface ILinkProps {
  to: string;
  title: string;
}

export const AppLink: React.FC<ILinkProps> = ({ to, title }) => {
  return (
    <>
      <Link to={to} className=''>
        {title}
      </Link>
    </>
  );
};
