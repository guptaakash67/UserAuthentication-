import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBp8IROqxsLd46bcfOwNkn2BlrTg9t9JiU",
  authDomain: "loginsignupauth-4d885.firebaseapp.com",
  projectId: "loginsignupauth-4d885",
  storageBucket: "loginsignupauth-4d885.firebasestorage.app",
  messagingSenderId: "G-P489JTXEVM",
  appId: "1:1086808905531:web:ca463b27c57b23aeee891e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;