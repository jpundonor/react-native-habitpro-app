// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZv574Ss4HqgAOhqex8cy3Z6aA4XNXWZ4',
  authDomain: 'habitpro-651c3.firebaseapp.com',
  projectId: 'habitpro-651c3',
  storageBucket: 'habitpro-651c3.appspot.com',
  messagingSenderId: '756007542378',
  appId: '1:756007542378:web:31388c3f0fb168d3b83413',
  measurementId: 'G-PKGJN34TSM',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseAuth);
export const FirebaseDB = getFirestore(FirebaseApp);


export const analytics = getAnalytics(FirebaseApp);
