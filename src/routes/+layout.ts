export const ssr = false;

import { auth } from "$lib/client/fb";
import { redirect } from "@sveltejs/kit";
import { onAuthStateChanged } from "firebase/auth";
import { authStore, fetchUserInfo } from "../stores/auth_store";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({}) => {
  const user = await getAuthUser()

  function getAuthUser() {
    return new Promise(resolve => {
      auth.onAuthStateChanged(async (user) => {
        console.log('auth state changed', user?.uid)
        const userInfo = await fetchUserInfo(user)
        authStore.set({
          isLoggedIn: user !== null,
          user: userInfo,
          firebaseControlled: true,
        });
        resolve(userInfo)

        if (!userInfo) {
          throw redirect(307, '/auth/login');
        }
      });
    });
  }

  return { user }
}