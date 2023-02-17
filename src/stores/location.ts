import { get, writable } from "svelte/store";
import type firebase from "firebase/app";
import type { User } from "firebase/auth";
import { authStore } from "./auth_store";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "$lib/client/fb";
import type { StaffType } from "./satff";

type LocationType =  {
  id: string,
  title: string,
}

export const locationStore = writable<LocationType[]>([]);

export const fetchLocationInfo = async (businessId: string) : Promise<LocationType[]> => {
  const q = collection(db, `business/${businessId}/locations`);

  const querySnapshot = await getDocs(q);

  let data: LocationType[] = []
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data() as LocationType,
      id: doc.id,
    })
  });

  locationStore.update(n => data)

  return data
}