import { get, writable } from "svelte/store";
import type firebase from "firebase/app";
import type { User } from "firebase/auth";
import { authStore } from "./auth_store";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "$lib/client/fb";

type UserInfo = User & {
  image: string,
  name: string
}

export const userStore = writable<UserInfo | null>(null);

export const fetchUserInfo = async () => {
  // const docRef = collection(db, "business")
  let user = get(authStore).user
  if (!user) return

  const q = query(collection(db, "users"), where("userId", "==", user?.uid));

  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    userStore.set({
      ...user,
      image: querySnapshot.docs[0].data().image,
      name: querySnapshot.docs[0].data().name,
    })
  }
}

export const createUserInfo = async () => {
  // // const docRef = collection(db, "business")
  // let user = get(authStore).user
  // if (!user) return

  // const q = query(collection(db, "users"), where("userId", "==", user?.uid));

  // const querySnapshot = await getDocs(q);

  // if (!querySnapshot.empty) {
  //   userStore.set({
  //     ...user,
  //     image: querySnapshot.docs[0].data().image,
  //     name: querySnapshot.docs[0].data().name,
  //   })
  // }
}