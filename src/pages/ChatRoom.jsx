
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ChatBox from "../Componenets/Chat/ChatBox";
import SendMessage from "../Componenets/Chat/SendMessage";


const ChatRoom = () => {
  return (
    <div className="flex-grow overflow-y-auto p-4">
    {/* Chat */}
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <header className="p-4 bg-blue-500 text-white">
          <h1 className="text-2xl font-bold">Chat Forum</h1>
        </header>
        
          <ChatBox />

        <SendMessage />
      </div>
    </div>
  );
};

export default ChatRoom;
