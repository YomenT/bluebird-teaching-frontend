import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

function showNotification(message) {
  const notification = document.getElementsByClassName("notification")[0];
  notification.textContent = message;
  notification.classList.add("animated");
  setTimeout(() => {
    notification.classList.remove("animated");
  }, 5000);
}

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGVos4K0ca5LGIEa7e2sZNQCHKLqpCTHM",
    authDomain: "bluebird-teaching.firebaseapp.com",
    projectId: "bluebird-teaching",
    storageBucket: "bluebird-teaching.appspot.com",
    messagingSenderId: "29312246392",
    appId: "1:29312246392:web:4782de79511ef9e4f1038d",
    measurementId: "G-M3KTFY6QF8"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,

//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      showNotification(err);
    }
};

const registerWithEmailAndPassword = async (name, email, password, userType) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        userType,
      });
    } catch (err) {
      showNotification(err);
    }
};

const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      showNotification("Password reset link sent!");
    } catch (err) {
      showNotification(err);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    // signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    showNotification,
};