import { get, writable } from "svelte/store";
import type firebase from "firebase/app";
import type { User } from "firebase/auth";
import { authStore } from "./auth_store";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "$lib/client/fb";
import type { StaffType } from "./satff";

type TeamType =  {
  id: string,
  title: string,
  description: string,
  location: string
}

type TeamTypeStore = {
  teams: TeamType[],
  load: boolean
}

export const teamStore = writable<TeamTypeStore>({teams:[], load: false});

export const fetchTeamInfo = async (businessId: string) : Promise<TeamType[]> => {
  if (get(teamStore).load) {
    return get(teamStore).teams
  }
  const q = collection(db, `business/${businessId}/teams`);

  const querySnapshot = await getDocs(q);

  let data: TeamType[] = []
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data() as TeamType,
      id: doc.id,
    })
  });

  teamStore.update(n => ({teams: data, load: true}))

  return data
}