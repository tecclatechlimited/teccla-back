import React, { useState } from "react";
import { userAuth } from "../../Context/AuthContext";
import {  collection, addDoc , serverTimestamp} from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane, faPaperclip, faImage} from "@fortawesome/free-solid-svg-icons";

const SendMessage = ( ) => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const { currentUser } = userAuth();
  const { uid, displayName, photoURL } = currentUser;

  const handleSendMessage = async (event) => {
      event.preventDefault();
    // Check if all inputs are empty
    if (!text.trim() && !file && !image) {
      return; // Exit the function if all inputs are empty or contain only whitespace
    }

  const avatar = photoURL || ""; // Use an empty string as a fallback if photoURL is undefined
  //  const name = displayName || ""; // Use an empty string as a fallback if displayName is undefined



    if (file) {
      const fileId = uuid();
      const fileRef = ref(storage, `chatFiles/Files/${fileId}`);
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // await updateDoc(doc(db, "chats", chatId), {
            await addDoc(collection(db, "chats"), {
              id: uuid(),
              text,
              name: displayName,
              avatar,
              senderId: uid,
              date: new Date(),
              file: downloadURL,
              createdAt: serverTimestamp(),

            });
          });
        }
      );
    } else if (image) {
      const imageId = uuid();
      const imageRef = ref(storage, `chatFiles/Images/${imageId}`);
      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle progress or any state changes if needed
        },
        (error) => {
          // Handle error
          console.log(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, "chats"), {
            id: uuid(),
            text,
            avatar,
            name: displayName,
            senderId: currentUser.uid,
            date: new Date(),
            img: downloadURL,
            createdAt: serverTimestamp(),

          });
        }
      );
    } else {
      await addDoc(collection(db, "chats"), {
        id: uuid(),
        text,
        avatar,
        name: displayName,
        senderId: currentUser.uid,
        date: new Date(),
        createdAt: serverTimestamp(),

      });
    }

    setText("");
    setFile(null);
    setImage(null);
  };
  

  return (
    <div className="p-4 bg-gray-100 fixed w-full bottom-0  mt-6">
      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="flex w-full  ">
        {/* Text input */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-70 input  border rounded-lg py-2 mr-2  "
          type="text"
          placeholder="Type your message..."
        />

        {/* Change the Choose file text to ICON */}

        {/* Image Input */}
        <label className="cursor-pointer">
          <FontAwesomeIcon
            icon={faImage}
            className="w-5 h-5 text-gray-400 m-4"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="hidden"
          />
        </label>

        {/* File Input */}
        <label  className="cursor-pointer">
          <FontAwesomeIcon
            icon={faPaperclip}
            className="w-5 h-5 text-gray-400 m-4"
          />
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
        </label>

        {/* onClick={handleSendMessage} */}
        <button  onClick={handleSendMessage}>
          
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
