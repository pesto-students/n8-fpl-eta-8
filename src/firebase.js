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
  apiKey: "AIzaSyDB1Rb-qZEOK1TCZlNjtcSRxxJZa7vm3W8",
  authDomain: "upbeat-button-327904.firebaseapp.com",
  projectId: "upbeat-button-327904",
  storageBucket: "upbeat-button-327904.appspot.com",
  messagingSenderId: "378435873818",
  appId: "1:378435873818:web:fb66772e7154b0a0b7f5a3",
  measurementId: "G-BEXQFLEJBV"
};

class Firebase {
  constructor() {
    const app = initializeApp(config);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
    this.provider = new GoogleAuthProvider();
    this.provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
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

  // addQuote(quote) {
  //   if (!this.auth.currentUser) {
  //     return alert("Not authorized");
  //   }

  //   return this.db
  //     .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
  //     .set({
  //       quote,
  //     });
  // }

  isInitialized() {
    return new Promise((resolve) => {
      onAuthStateChanged(this.auth, resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  // async getCurrentUserQuote() {
  //   const quote = await this.db
  //     .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
  //     .get();
  //   return quote.get("quote");
  // }
}

export default new Firebase();
