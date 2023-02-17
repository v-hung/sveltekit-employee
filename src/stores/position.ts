import { get, writable } from "svelte/store";
import type firebase from "firebase/app";
import type { User } from "firebase/auth";
import { authStore } from "./auth_store";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "$lib/client/fb";

type PositionType =  {
  id: string,
  title: string,
}

type PositionTypeStore = {
  positions: PositionType[],
  load: boolean
}

export const positionStore = writable<PositionTypeStore>({positions: [], load: false});

export const fetchPositionInfo = async (businessId: string) : Promise<PositionType[]> => {
  if (get(positionStore).load) {
    return get(positionStore).positions
  }

  const q = collection(db, `business/${businessId}/positions`);

  const querySnapshot = await getDocs(q);

  let data: PositionType[] = []
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data() as PositionType,
      id: doc.id,
    })
  });

  positionStore.update(n => ({positions: data, load: true}))

  return data
}