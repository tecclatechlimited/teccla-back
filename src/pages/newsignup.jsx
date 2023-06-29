import { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function SignupPage() {
  const { signup } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Create user with email and password using Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Set user's display name using first name and last name
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      // Upload profile picture to Firebase Storage and get download URL
      let downloadURL = null;
      if (profilePicture) {
        const storage = getStorage();
        const storageRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(storageRef, profilePicture);

        downloadURL = await getDownloadURL(storageRef);
      }

      // Store user details, including the profile picture URL, in Firestore
      const db = getFirestore();
      const usersCollectionRef = collection(db, 'users');
      await addDoc(usersCollectionRef, {
        firstName,
        lastName,
        email,
        photoURL: downloadURL,
      });

      // Reset the form fields
      setFirstName('');
      setLastName('');
      setProfilePicture(null);
      setEmail('');
      setPassword('');

      console.log('Signup successful');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      {/* Input fields for first name, last name, profile picture, email, and password */}
    </form>
  );
}

export default SignupPage;
