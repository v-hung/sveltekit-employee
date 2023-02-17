import { db } from "$lib/client/fb";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { get, writable } from "svelte/store";
import { authStore } from "./auth_store";

export type BusinessType = {
  id: string,
  title: string;
  userId: string;
  image: string;
}

export const businessStore = writable<BusinessType | null>(null);

export const fetchBusiness = async () : Promise<BusinessType | null> => {
  // const docRef = collection(db, "business")
  let user = get(authStore).user
  if (!user) return null

  const q = query(collection(db, "business"), where("userId", "==", user?.uid));

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    businessStore.set({
      ...querySnapshot.docs[0].data() as any,
      id: querySnapshot.docs[0].id
    })

    return {
      ...querySnapshot.docs[0].data() as any,
      id: querySnapshot.docs[0].id
    }
  }

  return null;
}