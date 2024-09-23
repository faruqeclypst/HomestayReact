import { db } from './firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { Homestay } from '../types/homestay';

const COLLECTION_NAME = 'homestays';

export const homestayService = {
  getAll: async () => {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Homestay));
  },
  create: (data: Omit<Homestay, 'id'>) => addDoc(collection(db, COLLECTION_NAME), data),
  update: (id: string, data: Partial<Homestay>) => updateDoc(doc(db, COLLECTION_NAME, id), data),
  delete: (id: string) => deleteDoc(doc(db, COLLECTION_NAME, id)),
};