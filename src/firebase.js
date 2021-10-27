import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: process.env.REACT_APP_GOOGLE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_GOOGLE_PROJECTID,
  storageBucket: process.env.REACT_APP_GOOGLE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_GOOGLE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_GOOGLE_APPID,
  measurementId: process.env.REACT_APP_GOOGLE_MEASUREMENTID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,

};

class Firebase {
  constructor() {
    const app = initializeApp(config);
    this.auth = getAuth(app);
    // ? have we used it anywhere
    this.db = getFirestore(app);
    this.provider = new GoogleAuthProvider();
    this.auth.languageCode = "en";
    this.realTimeDB = getDatabase(app);
  }

  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  loginGoogle() {
    return signInWithPopup(this.auth, this.provider);
  }

  async register(name, email, password) {
    await createUserWithEmailAndPassword(this.auth, email, password);
    return updateProfile(this.auth.currentUser, {
      displayName: name,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      onAuthStateChanged(this.auth, resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  updateUserName(userName) {
    return updateProfile(this.auth.currentUser, {
      displayName: userName,
    });
  }

  updateUserEmail(emailAddress) {
    return updateEmail(this.auth.currentUser, emailAddress);
  }

  reLogin(username, password) {
    return reauthenticateWithCredential(
      this.auth.currentUser,
      EmailAuthProvider.credential(username, password)
    );
  }

  setNewPassword(newPassword) {
    return updatePassword(this.auth.currentUser, newPassword);
  }
}

export default new Firebase();
