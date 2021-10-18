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
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: process.env.REACT_APP_GOOGLE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_GOOGLE_PROJECTID,
  storageBucket: process.env.REACT_APP_GOOGLE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_GOOGLE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_GOOGLE_APPID,
  measurementId: process.env.REACT_APP_GOOGLE_MEASUREMENTID
};

class Firebase {
  constructor() {
    const app = initializeApp(config);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
    this.provider = new GoogleAuthProvider();
    this.auth.languageCode = "en";

    
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

}

export default new Firebase();
