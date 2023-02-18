import { get, writable } from "svelte/store";
import type firebase from "firebase/app";
import type { User } from "firebase/auth";
import { authStore } from "./auth_store";
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
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
  team: string,
  location: string
}

type StaffTypeStore = {
  staffs: StaffType[],
  load: boolean
}

export const staffStore = writable<StaffTypeStore>({staffs: [], load: false});

export const fetchStaffInfo = async (businessId: string) : Promise<StaffType[]> => {
  if (get(staffStore).load) {
    return get(staffStore).staffs
  }
  const q = collection(db, `business/${businessId}/staffs`);

  const querySnapshot = await getDocs(q);

  let data: StaffType[] = []
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data() as StaffType,
      id: doc.id
    })
  });

  staffStore.update(n => ({staffs: data, load: true}))

  return data
}

export const createStaff = async (businessId: string, info: any, staffId: string = "") => {
  if (!staffId) {
    // create
    const q = collection(db, `business/${businessId}/staffs`);
  
    await addDoc(q, info)
      .then(docRef => {
        const data: StaffType = {
          ...info,
          id: docRef.id
        }
        staffStore.update(n => ({staffs: [...n.staffs, data], load: true}))
      })
      .catch(error => {
        throw error
      })
  }
  else {
    // update
    const q = doc(db, `business/${businessId}/staffs/${staffId}`);
  
    await updateDoc(q, info)
      .then(docRef => {
        staffStore.update(n => ({staffs: n.staffs.map(v => {
          if (v.id == staffId) {
            return {
              ...v,
              ...info
            }
          }
          else {
            return v;
          }
        }), load: true}))
      })
      .catch(error => {
        throw error
      })
  }
}