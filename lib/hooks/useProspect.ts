// lib/hooks/useProspects.ts
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'
import app from '@/lib/firebase' 
import { ProspectData } from '../types'

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
