import type { LayoutLoad } from "./$types"
import { fail, redirect, error } from '@sveltejs/kit';
import { fetchBusiness } from "../../stores/business";
import { fetchUserInfo } from "../../stores/auth_store";

export const load: LayoutLoad = async ({parent}) => {
  const { user } = await parent()

  const [ business ] = await Promise.all([
    fetchBusiness()
  ])

  return {
    business
  }
}