import React from 'react';

export default function Avatar({ src }) {
  return (
    <img className='aspect-square h-10 rounded-full' src={src} alt='avatar' />
  );
}
