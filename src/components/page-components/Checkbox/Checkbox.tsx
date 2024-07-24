import React from 'react';

interface IPasswordInput {
  label: string;
  onChange: () => void;
}

export const Checkbox: React.FC<IPasswordInput> = ({ label, onChange }) => {
  return (
    <>
      <label className=''>
        {label}
        <input className='' onChange={onChange} type='checkbox' />
      </label>
    </>
  );
};
