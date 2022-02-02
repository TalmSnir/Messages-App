import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Messages from './Messages';
import NewMessageInput from './NewMessageInput';
import WelcomePage from './WelcomePage';

export default function Main({ className }) {
  const { user } = useAuth();
  return (
    <main className={`rounded-xl overflow-hidden ${className}`}>
      {user ? (
        <>
          <Messages />
          <NewMessageInput className='bg-red-500' />
        </>
      ) : (
        <WelcomePage />
      )}
    </main>
  );
}
