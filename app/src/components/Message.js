import React from 'react';

import Avatar from './Avatar';

export default function Message({
  photoURL,
  createdBy,
  message,
  createdAt,
  orientation,
}) {
  return (
    <div
      className={`flex gap-4 max-w-[75%] ${
        orientation === 'end' ? 'self-end flex-row-reverse' : ''
      } `}>
      <Avatar src={photoURL} />

      <div className='flex flex-col gap-2 text-sm p-2 bg-slate-200 rounded-lg w-max '>
        {message}
        <div className='text-xs self-end capitalize'>
          <span className='font-semibold'>{createdBy}</span>{' '}
          <time className='block'>{createdAt}</time>
        </div>
      </div>
    </div>
  );
}
