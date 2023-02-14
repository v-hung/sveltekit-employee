import { writable } from "svelte/store";
import type firebase from "firebase/app";
import type { User } from "firebase/auth";

export const authStore = writable<{
  isLoggedIn: boolean;
  user: User | null;
  firebaseControlled: boolean;
}>({
  isLoggedIn: false,
  user: null,
  firebaseControlled: false,
});