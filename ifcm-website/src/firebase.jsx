import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6dtPMIxu0tD0sHG5pjgMvxjeJn-5jq_w",
  authDomain: "ifcm-group.firebaseapp.com",
  databaseURL: "https://ifcm-group-default-rtdb.firebaseio.com",
  projectId: "ifcm-group",
  storageBucket: "ifcm-group.appspot.com",
  messagingSenderId: "258754751210",
  appId: "1:258754751210:web:279c46bcd3258960d28593"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getDatabase(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, db, storage, firestore };
