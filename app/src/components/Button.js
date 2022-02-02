import React from 'react';

export default function Button({ className, children, onClick }) {
  return (
    <button className={`py-2 px-3  rounded-md ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
