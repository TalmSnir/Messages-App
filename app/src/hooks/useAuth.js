import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);

    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      let signInResult = await signInWithPopup(auth, provider);

      setUser(signInResult.user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}
