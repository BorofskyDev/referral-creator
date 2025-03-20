// lib/hooks/useProspects.ts
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'
import app from '@/lib/firebase' 

interface ProspectData {
  name: string
  phone: string
  email: string
  notes: string
}

export function useProspects() {
  const db = getFirestore(app)

  async function addProspect(data: ProspectData) {
    await addDoc(collection(db, 'prospects'), {
      ...data,
      createdAt: serverTimestamp(),
    })
  }

  return { addProspect }
}
