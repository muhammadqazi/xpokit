import { type AxiosError } from 'axios';
import { doc, getDoc } from 'firebase/firestore';
import { createMutation } from 'react-query-kit';

import { firestoreDb } from '@/config';

type GetByIdVariables = { collectionName: string; id: string };
type GetByIdResponse = { id: string; data: any };

export const useGetDocumentById = createMutation<
  GetByIdResponse,
  GetByIdVariables,
  AxiosError
>({
  mutationFn: async ({ collectionName, id }) => {
    try {
      const docRef = doc(firestoreDb, collectionName, id);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        return { id: docSnapshot.id, data: docSnapshot.data() };
      } else {
        throw new Error(`Document with ID ${id} not found.`);
      }
    } catch (error: any) {
      throw new Error(`Failed to get document: ${error.message}`);
    }
  },
});
