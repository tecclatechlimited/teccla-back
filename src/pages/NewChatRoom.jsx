import React from "react";
import ChatBox from "../Componenets/Chat/ChatBox";
import SendMessage from "../Componenets/Chat/SendMessage";


const NewChatRoom = () => {

  return (
      <div className="w-full flex flex-col flex-grow  ">
        {/* Header */}
        <header className="p-6 bg-blue-500 flex flex-grow text-white sticky top-2  z-10">
          <h1 className="text-2xl font-bold">Chat Forum</h1>
        </header>

        {/* Chat Room */}
        <div className="flex-grow overflow-y-auto p-4">
          {/* Render chat messages */}
       
                <ChatBox />
        </div>

        {/* Input Box */}
        {/* <div className="p-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-2">
            Send
          </button>
        </div> */}
        <SendMessage />
      </div>

  );
};

export default NewChatRoom;
