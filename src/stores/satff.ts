import { get, writable } from "svelte/store";
import type firebase from "firebase/app";
import type { User } from "firebase/auth";
import { authStore } from "./auth_store";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "$lib/client/fb";

export type StaffType =  {
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  image: string,
  phone: string,
  position: string,
  role: string,
  teamId: string,
  location: string
}

export const staffStore = writable<StaffType[]>([]);

export const fetchStaffInfo = async (businessId: string) : Promise<StaffType[]> => {
  const q = collection(db, `business/${businessId}/staffs`);

  const querySnapshot = await getDocs(q);

  let data: StaffType[] = []
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data() as StaffType,
      id: doc.id
    })
  });

  return data
}