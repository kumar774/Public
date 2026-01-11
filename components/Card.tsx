import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm border border-orange-100 p-6 transition-all duration-300 hover:shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;