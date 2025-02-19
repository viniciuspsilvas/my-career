import React from 'react';
import { cn } from '../lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-6 py-2 rounded-2xl font-semibold shadow-lg transition-all',
        'bg-primary text-white hover:bg-primary-dark active:scale-95',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
