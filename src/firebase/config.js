import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD3tYBguPTUIiwJEgXv3mgje-bYGZ9M62E",
  authDomain: "fir-9-reading-list-a6a5a.firebaseapp.com",
  projectId: "fir-9-reading-list-a6a5a",
  storageBucket: "fir-9-reading-list-a6a5a.appspot.com",
  messagingSenderId: "422464975319",
  appId: "1:422464975319:web:87313fd185d282c4c91b92"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }