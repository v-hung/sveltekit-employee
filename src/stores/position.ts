import { get, writable } from "svelte/store";
import type firebase from "firebase/app";
import type { User } from "firebase/auth";
import { authStore } from "./auth_store";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "$lib/client/fb";
import type { StaffType } from "./satff";

type PositionType =  {
  id: string,
  title: string,
}

export const positionStore = writable<PositionType[]>([]);

export const fetchPositionInfo = async (businessId: string) : Promise<PositionType[]> => {
  const q = collection(db, `business/${businessId}/positions`);

  const querySnapshot = await getDocs(q);

  let data: PositionType[] = []
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data() as PositionType,
      id: doc.id,
    })
  });

  positionStore.update(n => data)

  return data
}