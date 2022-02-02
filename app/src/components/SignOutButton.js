import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Button from './Button';
export default function SignOutButton() {
  const { handleSignOut } = useAuth();
  return (
    <Button
      className='text-orange-500 border border-orange-500'
      onClick={handleSignOut}>
      sign out
    </Button>
  );
}
