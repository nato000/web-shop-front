import React from 'react';
import './button.css';

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  title: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

export const AppButton: React.FC<ButtonProps> = ({ disabled, onClick, title, type }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick} className='button' type={type}>
        {title}
      </button>
    </>
  );
};
