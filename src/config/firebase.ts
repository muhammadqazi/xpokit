import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { storage } from '@/lib';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};
const firebaseApp = initializeApp(firebaseConfig);

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence({
    setItem: (key, value) => {
      storage.set(key, value);
      return Promise.resolve();
    },
    getItem: (key) => {
      const value = storage.getString(key);
      return Promise.resolve(value ?? null);
    },
    removeItem: (key) => {
      storage.delete(key);
      return Promise.resolve();
    },
  }),
});

const firestoreDb = initializeFirestore(
  firebaseApp,
  {
    experimentalForceLongPolling: true,
  },
  'db'
);
const firebaseStorage = getStorage(firebaseApp);

export { auth, firebaseApp, firebaseStorage, firestoreDb };
