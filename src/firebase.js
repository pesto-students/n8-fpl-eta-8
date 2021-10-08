import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyB_qcFMgQAEnkZeku79M8PDN38ZAWZYTcY",
  authDomain: "test-project-6b206.firebaseapp.com",
  databaseURL:
    "https://test-project-6b206-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-project-6b206",
  storageBucket: "test-project-6b206.appspot.com",
  messagingSenderId: "651975928036",
};

class Firebase {
  constructor() {
    const app = initializeApp(config);
    this.auth = getAuth(app);
    this.db = getFirestore(app);

    // this.auth = app.auth();
    // this.db = app.firestore();
  }

  login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
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
