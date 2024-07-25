import React from 'react';
import './checkbox.css';
interface IPasswordInput {
  label: string;
  onChange: () => void;
}

export const Checkbox: React.FC<IPasswordInput> = ({ label, onChange }) => {
  return (
    <>
      <label className='checkbox__label'>
        {label}
        <input className='checkbox__input' onChange={onChange} type='checkbox' />
      </label>
    </>
  );
};
