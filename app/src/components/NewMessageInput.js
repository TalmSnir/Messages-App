import React, { useRef, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import useMessages from '../hooks/useMessages';

export default function NewMessageInput({ className }) {
  const { handleAddMessage } = useMessages();
  const { user } = useAuth();
  const inputRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();

    user &&
      inputRef &&
      handleAddMessage(
        { name: user.displayName, avatar: user.photoURL, uid: user.uid },
        inputRef.current.value
      );
    e.target.reset();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center justify-end gap-4 w-full px-8 py-4 bg-slate-100 ${className}`}>
      <input
        ref={inputRef}
        type='text'
        className='w-3/4 appearance-none border-0 rounded-lg'
        name='new-message'
        id='new-message'
      />
      <button className='appearance-none border-none p-3 flex items-center justify-center text-white bg-slate-900 aspect-square rounded-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'>
          <path d='M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z' />
        </svg>
      </button>
    </form>
  );
}
