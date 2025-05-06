'use client'
import React from 'react';

interface RegisterButtonProps {
  children: React.ReactNode;  // This allows the button to accept children
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ children }) => {
  const handleClick = () => {
    window.location.href = '/Register';
  };

  return (
    <button onClick={handleClick} className='text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-1/2 px-2 py-2 rounded-lg'>
      {children}  {/* This will render the children inside the button */}
    </button>
  );
};

export default RegisterButton;

