import { type AxiosError } from 'axios';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { createMutation } from 'react-query-kit';

import { firestoreDb } from '@/config';

type GetManyVariables = { collectionName: string; field: string; value: any };
type GetManyResponse = { id: string; data: any }[];

export const useGetDocuments = createMutation<
  GetManyResponse,
  GetManyVariables,
  AxiosError
>({
  mutationFn: async ({ collectionName, field, value }) => {
    try {
      const q = query(
        collection(firestoreDb, collectionName),
        where(field, '==', value)
      );
      const querySnapshot = await getDocs(q);
      const documents: GetManyResponse = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, data: doc.data() });
      });
      return documents;
    } catch (error: any) {
      throw new Error(`Failed to get documents: ${error.message}`);
    }
  },
});
