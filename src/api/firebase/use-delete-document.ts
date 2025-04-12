import { type AxiosError } from 'axios';
import { deleteDoc, doc } from 'firebase/firestore';
import { createMutation } from 'react-query-kit';

import { firestoreDb } from '@/config';

type DeleteVariables = { collectionName: string; id: string };
type DeleteResponse = { id: string };

export const useDeleteDocument = createMutation<
  DeleteResponse,
  DeleteVariables,
  AxiosError
>({
  mutationFn: async ({ collectionName, id }) => {
    try {
      const docRef = doc(firestoreDb, collectionName, id);
      await deleteDoc(docRef);
      return { id };
    } catch (error: any) {
      throw new Error(`Failed to delete document: ${error.message}`);
    }
  },
});
