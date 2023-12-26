import React, { ButtonHTMLAttributes } from 'react';

import '../styles/components/primarybutton.css';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button className="primary-button" {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
