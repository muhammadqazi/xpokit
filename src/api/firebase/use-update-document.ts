import { type AxiosError } from 'axios';
import { doc, updateDoc } from 'firebase/firestore';
import { createMutation } from 'react-query-kit';

import { firestoreDb } from '@/config/firebase';

type UpdateVariables = { collectionName: string; id: string; payload: any };
type UpdateResponse = { id: string; data: any };

export const useUpdateDocument = createMutation<
  UpdateResponse,
  UpdateVariables,
  AxiosError
>({
  mutationFn: async ({ collectionName, id, payload }) => {
    try {
      const docRef = doc(firestoreDb, collectionName, id);
      await updateDoc(docRef, payload);
      return { id, data: payload };
    } catch (error: any) {
      throw new Error(`Failed to update document: ${error.message}`);
    }
  },
});
