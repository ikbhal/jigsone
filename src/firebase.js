import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqJyBoPLXy4CpotZPOsSKjK4rKJTCAbgE",
  authDomain: "ikbhal-cb53f.firebaseapp.com",
  projectId: "ikbhal-cb53f",
  storageBucket: "ikbhal-cb53f.appspot.com",
  messagingSenderId: "839053098923",
  appId: "1:839053098923:web:f4b07ce95d4454a1189cee",
  measurementId: "G-5Q8R16MEPS"
};
const fapp = initializeApp(firebaseConfig);
const db = getFirestore(fapp);

export {db};