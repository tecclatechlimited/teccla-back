import { userAuth } from "../../Context/AuthContext";
import user from "/assets/forum/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faImage, faFile } from "@fortawesome/free-solid-svg-icons";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../config/firebase";
import React, { useEffect, useState } from "react";

const Message = ({ message }) => {
  const { currentUser } = userAuth();
  const [downloadURL, setDownloadURL] = useState("");

  // useEffect(() => {
  //   const downloadFIle = async () => {
  //     try {
  //       const fileRef = ref(storage, message.id);
  //       const downloadUrl = await getDownloadURL(fileRef);
  //       setDownloadURL(downloadUrl);
  //     } catch (error) {
  //       console.error("Error occurred during image download:", error);
  //     }
  //   };

  //   downloadFIle();
  // }, [message.id]);

  return (
    <div className="">
      <div
        className={`chat ${
          message.senderId === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        {/* IMAGE */}
        <div>
          <div className="image">
            {message.img && (
              <img src={message.img} className="w-40" alt="Message Image" />
            )}

          </div>
        </div>

        {/* FILE */}
        {/* <div className="file">
          {message.file && (
            <img src={message.file} className="w-40" alt="Message File" />
          )}
        </div> */}
        {/* <div>
          {downloadURL && (
            <a href={downloadURL} download>
              Download File
            </a>
          )}
        </div> */}

        {/* <div className="file-preview">
          <FontAwesomeIcon icon={faImage} className="file-icon" />
          <a href={message.file} download>
            Download Image
          </a>
        </div> */}

        <div className="flex w-full mt-2 space-x-3 max-w-sm ml-auto justify-end">
          {message.text && (
            <div>
              <div className="bg-blue-500 text-white p-3 rounded-l-lg rounded-br-lg">
                {message.text}
              </div>
        <div className="text-sm text-right text-gray-500 leading-none">
          {message.name}
          <time className="text-sm opacity-80 p-4">12:45</time>
        </div>
            </div>
          )}
        </div>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            {message.avatar ? (
              <img src={message.avatar} alt="User Avatar" />
            ) : (
              <img src={user} alt="Default Avatar" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
