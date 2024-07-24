import React from 'react';

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  title: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  buttonClass?: string;
}

export const AppButton: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  title,
  type,
  buttonClass,
}) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick} className='' type={type}>
        {title}
      </button>
    </>
  );
};
