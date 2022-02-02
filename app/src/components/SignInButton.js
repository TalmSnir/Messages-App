import React from 'react';
import { useAuth } from '../hooks/useAuth';

import Button from './Button';

export default function SignInButton() {
  const { handleSignIn } = useAuth();
  return (
    <Button className={'text-white bg-orange-500'} onClick={handleSignIn}>
      sign in
    </Button>
  );
}
