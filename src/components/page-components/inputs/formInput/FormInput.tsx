import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './form-input.css';

interface IinputProps {
  label?: string;
  type: string;
  id?: string;
  placeholder: string;
  value?: string | number;
  defaultValue?: string | number;
  register?: UseFormRegisterReturn;
  error?: string;
  accept?: string;
}

export const FormInput: React.FC<IinputProps> = ({
  label,
  type,
  id,
  placeholder,
  register,
  error,
  value,
  defaultValue,
  accept,
}) => {
  return (
    <>
      <label htmlFor={id} className='label'>
        {label}
        <input
          id={id}
          className='label__input'
          type={`${type}`}
          placeholder={placeholder}
          accept={accept}
          value={value}
          onChange={(e) => e.target.value}
          defaultValue={defaultValue}
          {...register}
        />
        {error && <span className='error-message'>{error}</span>}
      </label>
    </>
  );
};
