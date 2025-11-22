import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCmU9yKvzZWfXcQfYBknYaPaZFKoae0-KA",
  authDomain: "userauth-bb93a.firebaseapp.com",
  projectId: "userauth-bb93a",
  storageBucket: "userauth-bb93a.firebasestorage.app",
  messagingSenderId: "306198446238",
  appId: "1:306198446238:web:7fae37c67d6b1d01c2fb8f",
  measurementId: "G-CHYPGZ47R3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

// DEBUGGING INFO
if (typeof window !== 'undefined') {
  console.log('🔥 Firebase Config Status:');
  console.log('   Project ID:', firebaseConfig.projectId);
  console.log('   Auth Domain:', firebaseConfig.authDomain);
  console.log('   API Key Valid:', firebaseConfig.apiKey && firebaseConfig.apiKey.length > 20);
  console.log('   ⚠️ If values above look generic, update firebase.js with real credentials');
  console.log('   📖 See FIREBASE_SETUP.md for complete setup guide');
}
