import { type AxiosError } from 'axios';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { createMutation } from 'react-query-kit';

import { firestoreDb } from '@/config';
import { getDateTime } from '@/utils';

type AddVariables = { collectionName: string; payload: any };
type AddResponse = { id: string; data: any };

export const useAddDocument = createMutation<
  AddResponse,
  AddVariables,
  AxiosError
>({
  mutationFn: async ({ collectionName, payload }) => {
    try {
      const createdAt = getDateTime();
      const enrichedPayload = {
        ...payload,
        createdAt,
        isActive: true,
      };

      const docRef = await addDoc(
        collection(firestoreDb, collectionName),
        enrichedPayload
      );
      const docSnapshot = await getDoc(
        doc(firestoreDb, collectionName, docRef.id)
      );
      if (docSnapshot.exists()) {
        return { id: docRef.id, data: docSnapshot.data() };
      } else {
        throw new Error(
          `Failed to retrieve data from added document in ${collectionName}.`
        );
      }
    } catch (error: any) {
      throw new Error(
        `Failed to add document to ${collectionName}: ${error.message}`
      );
    }
  },
});
