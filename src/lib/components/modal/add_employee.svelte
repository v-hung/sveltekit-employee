<script lang="ts">
  import { clickOutside } from "$lib/utils/clickOutSide";
  import { fade, slide } from "svelte/transition";
  import { businessStore } from "../../../stores/business";
  import { positionStore } from "../../../stores/position";
  import { createStaff, staffStore } from "../../../stores/satff";
  import { teamStore } from "../../../stores/team";
  import Select from "../form/select.svelte";
  import Text from "../form/text.svelte";

  export let open = false
  export let roles: any[]
  export let staffId = ""

  let email = ""
  let image = ""
  let firstName = ""
  let lastName = ""
  let phone = ""
  let position = ""
  let role = ""
  let team = ""

  let staff = $staffStore.staffs.find(v => v.id == staffId)

  if (staff) {
    email = staff.email
    image = staff.image
    firstName = staff.firstName
    lastName = staff.lastName
    phone = staff.phone
    position = staff.position
    role = staff.role
    team = staff.team
  }
  else {
    email = ""
    image = ""
    firstName = ""
    lastName = ""
    phone = ""
    position = ""
    role = ""
    team = ""
  }

  let loading = false
  const addEmployee = async () => {
    try {
      if (loading) return
      loading = true
      await createStaff($businessStore!.id, {email,image,firstName,lastName,phone,position,role,team}, staffId)

      open = false
    } catch (error) {
      console.log(error)
    }
    finally {
      loading = false
    }
  }
</script>

<div transition:fade class="fixed top-0 left-0 right-0 bottom-0 bg-black/70 flex flex-col overflow-auto">
  <!-- <div class="flex-grow"></div> -->
  <div 
    transition:slide 
    class="flex-none my-16 w-full max-w-xl mx-auto rounded overflow-hidden relative"
  >
    <div class="px-6 py-4 text-white bg-primary font-medium">
      <span class="text-lg">Add Employee</span>
      <button class="icon float-right" on:click|preventDefault={() => open = false}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
      </button>
    </div>

    <div class="px-6 py-4 bg-white flex space-x-8">
      <div class="flex-none">
        <div class="w-20 h-20 rounded-full overflow-hidden bg-[var(--bg)]">
          <span class="icon w-full h-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9c-1.626 0-3 1.374-3 3s1.374 3 3 3 3-1.374 3-3-1.374-3-3-3z"></path><path d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm-8 12c-2.71 0-5-2.29-5-5s2.29-5 5-5 5 2.29 5 5-2.29 5-5 5z"></path></svg>
          </span>
          <!-- <img src="" alt="" class="w-full"> -->
        </div>
      </div>
      <div class="flex-grow min-w-0">
        <div class="flex -mx-2 flex-wrap">
          <div class="w-1/2 px-2 mb-4">
            <label for="" class="uppercase text-second text-xs font-medium">First name</label>
            <Text placeholer="Việt" class="mt-1" bind:data={firstName} />
          </div>
          <div class="w-1/2 px-2 mb-4">
            <label for="" class="uppercase text-second text-xs font-medium">Last name</label>
            <Text placeholer="Hùng" class="mt-1" bind:data={lastName} />
          </div>
          <div class="w-1/2 px-2 mb-4">
            <label for="" class="uppercase text-second text-xs font-medium">Position</label>
            <Select data={$positionStore.positions} class="mt-1" bind:choose={position} />
          </div>
          <div class="w-1/2 px-2 mb-4">
            <label for="" class="uppercase text-second text-xs font-medium">Role</label>
            <Select data={roles} class="mt-1" bind:choose={role} />
          </div>
        </div>
      </div>
    </div>

    <div class="px-6 py-4 bg-white border-t">
      <h5 class="text-second font-medium text-base">Contact</h5>
      <div class="flex -mx-2 flex-wrap mt-4">
        <div class="w-1/2 px-2 mb-4">
          <label for="" class="uppercase text-second text-xs font-medium">Email</label>
          <Text placeholer="example@gmail.com" class="mt-1" bind:data={email} />
        </div>
        <div class="w-1/2 px-2 mb-4">
          <label for="" class="uppercase text-second text-xs font-medium">Phone number</label>
          <Text placeholer="+84 399 633 237" class="mt-1" bind:data={phone} />
        </div>
        <div class="w-full px-2 mb-4">
          <label for="" class="uppercase text-second text-xs font-medium">Team</label>
          <Select data={$teamStore.teams} class="mt-1" bind:choose={team} />
        </div>
      </div>
    </div>

    <div class="px-6 py-4 bg-white flex space-x-4 justify-center border-t">
      <button class="btn-outline border-[var(--primary)]" on:click|preventDefault={() => open = false}>Cancel</button>
      <button 
        class="px-4 py-2 rounded-full bg-[var(--green)] text-white flex space-x-2 items-center"
        on:click|preventDefault={addEmployee}
      >
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg>
        </span>
        <span>Done</span>
      </button>
    </div>

    {#if loading}
      <div class="absolute w-full h-full top-0 left-0 bg-white/70 grid place-items-center">
        <span class="icon animate-spin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
        </span>
      </div>
    {/if}
  </div>
  <div class="flex-grow"></div>
</div>
