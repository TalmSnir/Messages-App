import { onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { messagesCollection } from '../firebase';
import { useAuth } from '../hooks/useAuth';

import Message from './Message';

// const messagesList = [
//   `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vquas explicabo recusandae temporibus praesentium, perferendis laudantium minus consequatur? Dolorem inventore nobis vitae consequatur eaque quis quaerat, velit perferendis incidunt.`,
//   `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus sit inventore nam fugiat minima quibusdam sunt cumque, doloremque animi harum suscipit, laboriosam expedita explicabo accusantium porro eligendi itaque esse.
// uas explicabo recusandae temporibus praesentium, perferendis laudantium minus consequatur? Dolorem inventore nobis vitae consequatur eaque quis quaerat, velit perferendis incidunt.`,
//   `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus sit inventore nam fugiat minima quibusdam sunt cumque, doloremque animi harum suscipit, laboriosam expedita explicabo accusantium porro eligendi itaque esse.
// `,
// ];

export default function Messages({ className }) {
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    let q = query(messagesCollection, orderBy('createdAt'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      let messagesList = querySnapshot.docs.map(doc => ({ ...doc.data() }));
      console.log(messagesList);
      setMessages(messagesList);
    });
    return unsubscribe;
  }, []);

  return (
    <section
      className={` p-4 bg-slate-50 flex flex-col flex-grow  gap-4 overflow-y-auto ${className}`}>
      {messages.map((message, id) => {
        return (
          <Message
            key={id}
            orientation={message.uid === user.uid ? 'end' : 'start'}
            message={message.text}
            photoURL={message.avatar}
            createdBy={message.createdBy}
            createdAt={new Date(message.createdAt.seconds * 1000).toUTCString()}
          />
        );
      })}
    </section>
  );
}
