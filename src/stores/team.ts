import { get, writable } from "svelte/store";
import type firebase from "firebase/app";
import type { User } from "firebase/auth";
import { authStore } from "./auth_store";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "$lib/client/fb";
import type { StaffType } from "./satff";

type TeamType =  {
  id: string,
  name: string,
  description: string
}

export const teamStore = writable<TeamType[]>([]);

export const fetchTeamInfo = async (businessId: string) : Promise<TeamType[]> => {
  const q = collection(db, `business/${businessId}/teams`);

  const querySnapshot = await getDocs(q);

  let data: TeamType[] = []
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data() as TeamType,
      id: doc.id,
    })
  });

  teamStore.update(n => (data))

  return data
}