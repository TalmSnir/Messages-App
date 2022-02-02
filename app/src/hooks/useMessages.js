import { addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { useCallback } from 'react';
import { messagesCollection } from '../firebase';

export default function useMessages() {
  const handleAddMessage = useCallback(async (user, message) => {
    try {
      await addDoc(messagesCollection, {
        text: message,
        avatar: user.avatar,
        createdBy: user.name,
        createdAt: serverTimestamp(),
        uid: user.uid,
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleGetMessages = useCallback(async () => {
    try {
      return await getDocs(messagesCollection);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return { handleAddMessage, handleGetMessages };
}
