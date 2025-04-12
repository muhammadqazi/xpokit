import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { createMutation } from 'react-query-kit';

import { firestoreDb } from '@/config';
import { FIRESTORE_COLLECTIONS } from '@/constants/firestore-collections';
import { type TokenType } from '@/lib/auth/utils';

type SignInVariables = { email: string; password: string };
type SignInResponse = {
  user: {
    uid: string;
    email: string;
    fullName: string;
    phone: string;
    userType: string;
  };
  token: TokenType;
};

export const useSignInUser = createMutation<SignInResponse, SignInVariables>({
  mutationFn: async ({ email, password }) => {
    const auth = getAuth();

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (!user) throw new Error('No user returned from Firebase.');

    const idToken = await user.getIdToken();

    const userQuery = query(
      collection(firestoreDb, FIRESTORE_COLLECTIONS.USERS),
      where('uid', '==', user.uid)
    );
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.empty) {
      throw new Error('User document not found in Firestore.');
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    const authUser = {
      uid: user.uid,
      email: user.email ?? '',
      fullName: userData.fullName,
      phone: userData.phone,
      userType: userData.userType,
      idToken: idToken,
    };

    return { user: authUser, token: idToken };
  },
});
