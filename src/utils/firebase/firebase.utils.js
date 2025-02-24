import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCqaZfe16NA49JWu5PMQF0Bw32Da0Y4dmU',
  authDomain: 'smit-cloth-store-805b9.firebaseapp.com',
  projectId: 'smit-cloth-store-805b9',
  storageBucket: 'smit-cloth-store-805b9.firebasestorage.app',
  messagingSenderId: '748674199034',
  appId: '1:748674199034:web:528c10d35fbd180b62c843',
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (user) => {
  const userDocref = doc(db, 'users', user.uid);
  const userSnapshot = await getDoc(userDocref);

  if (userSnapshot.exists() === false) {
    const { displayName, email } = user;
    const createdAt= new Date()
    try {
        await setDoc(userDocref, {
            displayName,
            email,
            createdAt
        })
    } catch (error) {
        console.log("Error creating user" , error.message);
    }
  }
  return userDocref
};
