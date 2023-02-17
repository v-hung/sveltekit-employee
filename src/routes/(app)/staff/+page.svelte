<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData

  let tab: "personal" | "archive" = "personal"

  let staffs = data.staffs

  let checked_data: any[] = []
  $: check_all = checked_data.length == staffs.length
  const toggleAll = () => {
    if (check_all) {
      checked_data = []
    }
    else {
      checked_data = staffs.map((v,i) => i)
    }
  }

  const findTeam = (teamId: string) => data.teams.find(v => v.id == teamId) || null
</script>

<div class="w-full h-full flex flex-col">
  <div class="flex items-center space-x-4">
    <h3 class="text-xl text-sencond font-semibold">
      Teams
      <span class="inline-block ml-1 text-sm text-under px-2 py-0.5 border rounded-full align-middle">50</span>
    </h3>
  
    <div class="!ml-auto flex items-center space-x-2 px-4 py-2 border rounded-full focus-within:border-[var(--primary)]">
      <input type="text" placeholder="Search" class="peer">
      <span class="icon peer-focus:text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
      </span>
    </div>
  
    <button class="btn">Add team</button>
  </div>
  
  <div class="mt-6 border-b flex space-x-4">
    <button
      class="tab py-2 relative font-medium {tab == "personal" ? 'active' : ''}"
      on:click|preventDefault={() => tab = "personal"}
    >Personal</button>
    <button
      class="tab py-2 relative font-medium {tab == "archive" ? 'active' : ''}"
      on:click|preventDefault={() => tab = "archive"}
    >Archive</button>
  </div>
  
  <div class="flex space-x-6 py-6">
    <div class="text-sm">
      Role
      <select name="location" id="location" class="ml-2 inline-block text-primary font-semibold cursor-pointer">
        <option value="all" selected>All</option>
      </select>
    </div>
  
    <div class="text-sm">
      Position
      <select name="location" id="location" class="ml-2 inline-block text-primary font-semibold cursor-pointer">
        <option value="all" selected>All</option>
      </select>
    </div>
  
    <div class="text-sm">
      Team
      <select name="location" id="location" class="ml-2 inline-block text-primary font-semibold cursor-pointer">
        <option value="all" selected>All</option>
      </select>
    </div>
  
    <div class="text-sm">
      Location
      <select name="location" id="location" class="ml-2 inline-block text-primary font-semibold cursor-pointer">
        <option value="all" selected>All</option>
      </select>
    </div>
  </div>
  
  {#if tab == "personal"}
    <table class="">
      <thead>
        <tr>
          <th><input type="checkbox" name="" on:click={toggleAll} checked={check_all}></th>
          <th>Full Name / Phone</th>
          <th>Role</th>
          <th>Position / Rate</th>
          <th>Team</th>
          <th>Location</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {#each staffs as v,i}
          <tr class="font-medium">
            <td><input type="checkbox" name="product" bind:group={checked_data} value="{i}"></td>
            <td>
              <div class="flex space-x-2 items-center">
                <div class="flex-none">
                  <img src="{v.image}" alt="" class="w-12 h-12 rounded-full object-cover">
                </div>
                <div>
                  <h5 class="text-primary font-medium">{v.firstName} {v.lastName}</h5>
                  <p class="text-under">{v.phone}</p>
                </div>
              </div>
            </td>
            <td class="text-second">{v.role}</td>
            <td class="text-second">{v.position}</td>
            <td class="text-second">{findTeam(v.teamId)?.name}</td>
            <td class="text-second">{v.location}</td>
            <td class="">
              <div class="flex items-center space-x-3">
                <span class="icon hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg>
                </span>
                <span class="icon text-[var(--orange-2)] hover:text-[var(--orange)] cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                </span>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  
    <div class="mt-auto pt-8">
      <div class="flex items-center space-x-3">
        <span>Results</span>
        <button class="btn-outline !text-second !flex items-center">
          <span>1 - 10</span>
          <span class="icon ml-2 -mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></span>
        </button>
        <span class="font-medium">of 50</span>

        <button class="!ml-auto">Prev</button>
        <button class="w-10 h-10 grid place-items-center rounded-full bg-primary text-white">1</button>
        <button class="w-10 h-10 grid place-items-center rounded-full border text-second">2</button>
        <button class="w-10 h-10 grid place-items-center rounded-full border text-second">3</button>
        <button class="w-10 h-10 grid place-items-center rounded-full border text-second">4</button>
        <button class="text-primary">Next</button>
      </div>
    </div>
  {:else if tab == "archive"}
  {/if}
</div>

<style lang="postcss">
  .tab.active {
    @apply text-[var(--primary)];
  }

  .tab.active::after {
    @apply absolute content-[''] bottom-[-1px] left-0 w-full h-0.5 bg-[var(--primary)];
  }
</style>