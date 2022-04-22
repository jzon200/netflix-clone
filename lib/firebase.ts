// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_XkIK4hokkCHYS2rjxF1W92AUpR8TUi4',
  authDomain: 'netflix-clone-174d4.firebaseapp.com',
  projectId: 'netflix-clone-174d4',
  storageBucket: 'netflix-clone-174d4.appspot.com',
  messagingSenderId: '733668651909',
  appId: '1:733668651909:web:595e58c860604bdaa58aec',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
