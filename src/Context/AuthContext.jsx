import { createContext, useState, useContext, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

//Create Context
const AuthContext = createContext();
// Provider Context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup

  const signup = async (
    email,
    password,
    firstName,
    lastName
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setCurrentUser(user)
 
      const usersCollectionRef = collection(db, "users");
      await addDoc(usersCollectionRef, {
        uid: user.uid,
        firstName,
        lastName,
        email,
      });

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        photoURL: ""
      });
        // ADD POPUP 
      console.log("Signup successful");
    } catch (error) {
      console.log(error);
    }
  };

  // Login

  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user
      setCurrentUser(user);
    } catch (error) {
      // Handle login error
      console.log(error);
      throw error;
    }
  }

  // Logout

  async function logout() {
    try {
      await signOut(auth);
      setCurrentUser(null);
    } catch (error) {
      // Handle logout error
      console.log(error);
      throw error;
    }
  }

  // Update Email

  // async function updateEmail(email) {
  //   try {
  //     await updateEmail(currentUser, email);
  //   } catch (error) {
  //     // Handle email update error
  //     console.log(error);
  //     throw error;
  //   }
  // }

  // Update password

  // async function updatePassword(password) {
  //   try {
  //     await updatePassword(currentUser, password);
  //   } catch (error) {
  //     // Handle password update error
  //     console.log(error);
  //     throw error;
  //   }
  // }

  // Reset password

  // async function resetPassword(email) {
  //   try {
  //     await sendPasswordResetEmail(auth, email);
  //   } catch (error) {
  //     // Handle password reset error
  //     console.log(error);
  //     throw error;
  //   }
  // }

  const userValue = {
    currentUser,
    setCurrentUser,
    signup,
    login,
    logout,
    // resetPassword,
    // updateEmail,
    // updatePassword,
  };

  // setCurrentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={userValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
