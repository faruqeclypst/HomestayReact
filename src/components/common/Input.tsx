import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 font-semibold">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-3 py-2 border rounded ${className}`}
        {...props}
      />
    </div>
  );
};