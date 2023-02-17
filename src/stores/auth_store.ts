import { writable } from "svelte/store";
import type firebase from "firebase/app";
import type { User } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "$lib/client/fb";

type UserInfo = User & {
  image: string,
  name: string
}

export const authStore = writable<{
  isLoggedIn: boolean;
  user: UserInfo | null;
  firebaseControlled: boolean;
}>({
  isLoggedIn: false,
  user: null,
  firebaseControlled: false,
});

export const fetchUserInfo = async (user: User | null) : Promise<UserInfo | null> => {
  if (!user) return null
  
  const q = query(collection(db, "users"), where("userId", "==", user?.uid));

  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    return {
      ...user!,
      image: querySnapshot.docs[0].data().image,
      name: querySnapshot.docs[0].data().name,
    }
  }
  return null
}