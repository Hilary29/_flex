'use client'
import React from 'react';

interface ButtonPurchaseProps {
  children: React.ReactNode;  // This allows the button to accept children
}

const ButtonPurchase: React.FC<ButtonPurchaseProps> = ({ children }) => {
  const handleClick = () => {
    window.location.href = '/Contact';
  };

  return (
    <button onClick={handleClick} className='rounded-lg text-white bg-[#1b3d74] border-2 border-[#1b3d74] flex-1 px-3 py-1'>
      {children}  {/* This will render the children inside the button */}
    </button>
  );
};

export default ButtonPurchase;

