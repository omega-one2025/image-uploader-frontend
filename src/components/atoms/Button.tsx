import React from 'react';
import { IconType } from 'react-icons';

type ButtonProps = {
  className?: string;
  loading?: boolean;
  icon?: IconType;
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  className = '',
  icon: Icon,
  label,
  loading,
  disabled,
}: ButtonProps) => {
  return (
    <button className={`btn ${className}`} disabled={disabled || loading}>
      {Icon && !loading && <Icon />}
      {loading && <span className="loading loading-spinner"></span>} {label}
    </button>
  );
};

export default Button;
