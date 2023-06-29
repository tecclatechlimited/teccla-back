import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const ChatBox = () => {
  const messagesEndRef = useRef();
  const [messages, setMessages] = useState([]);

  // const scrollToBottom = () => {
  //   messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="mb-20 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message}
        />
      ))}
      <div  className="" ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;
