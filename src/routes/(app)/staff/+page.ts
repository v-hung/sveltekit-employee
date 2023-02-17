import { fetchLocationInfo } from '../../../stores/location';
import { fetchPositionInfo } from '../../../stores/position';
import { fetchStaffInfo } from '../../../stores/satff';
import { fetchTeamInfo } from '../../../stores/team';
import type { PageLoad } from './$types';
 
export const load = (async ({ parent }) => {
  const { business } = await parent()

  const [teams, staffs, position, location] = await Promise.all([
    fetchTeamInfo(business?.id || ""),
    fetchStaffInfo(business?.id || ""),
    fetchPositionInfo(business?.id || ""),
    fetchLocationInfo(business?.id || "")
  ])

  return {
    teams, staffs
  };
}) satisfies PageLoad;