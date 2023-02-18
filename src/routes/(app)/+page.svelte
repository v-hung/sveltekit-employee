<script lang="ts">
 
</script>

<div class="w-full h-full flex items-stretch">
  <div class="flex-none w-72 bg-[var(--bg)] py-8 px-6">
    <p class="uppercase text-primary font-semibold">View</p>
    <div class="flex py-2 space-x-3 mt-4">
      <input id="availability" type="checkbox" checked>
      <label for="availability" class="font-medium text-second cursor-pointer select-none">Availability</label>
    </div>
    <div class="flex py-2 space-x-3">
      <input id="absences" type="checkbox" checked>
      <label for="absences" class="font-medium text-second cursor-pointer select-none">Absences</label>
    </div>
    <div class="flex py-2 space-x-3">
      <input id="assignments" type="checkbox" checked>
      <label for="assignments" class="font-medium text-second cursor-pointer select-none">Assignments</label>
    </div>

    <p class="uppercase text-primary font-semibold mt-8">Status</p>
    <div class="flex py-2 space-x-3 mt-4">
      <input id="pending" type="checkbox" checked>
      <label for="pending" class="font-medium text-second cursor-pointer select-none">Pending</label>
    </div>
    <div class="flex py-2 space-x-3">
      <input id="approved" type="checkbox" checked>
      <label for="approved" class="font-medium text-second cursor-pointer select-none">Approved</label>
    </div>
    <div class="flex py-2 space-x-3">
      <input id="decile" type="checkbox" checked>
      <label for="decile" class="font-medium text-second cursor-pointer select-none">Decile</label>
    </div>
  </div>

  <div class="flex-grow min-w-0 py-6 px-8">
    <div class="w-full h-full flex flex-col">
      <div class="flex items-center justify-between space-x-4">
        <h3 class="text-xl text-second font-semibold flex items-center space-x-2">
          <span>Schedule</span>
          <button class="btn-outline !flex items-center">
            <span>Week</span>
            <span class="icon ml-2 -mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></span>
          </button>
        </h3>

        <div class="flex-grow min-w-0 max-w-xs flex space-x-2 items-center">
          <div class="flex-grow min-w-0 flex items-center justify-between px-2 py-2 bg-[var(--bg)] rounded-full">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
            </span>
            <span class="text-second font-medium">June 2023</span>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
            </span>
          </div>

          <div class="flex-none">
            <span class="icon w-10 h-10 p-2 bg-[var(--bg)] rounded-full text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path></svg>
            </span>
          </div>
        </div>
      
        <div class="flex items-center space-x-2 px-4 py-2 border rounded-full focus-within:border-[var(--primary)]">
          <input type="text" placeholder="Search" class="peer">
          <span class="icon peer-focus:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
          </span>
        </div>
      </div>
      
      <div class="w-full overflow-x-auto">
        <div class="mt-8 border-t pt-4">
          <div class="schedule">
            <div class="bg-white p-2 pl-0 hide-divide-bottom">
              <div class="text-lg text-second font-medium align-middle">Employees</div>
            </div>
            {#each new Array(7) as _, i}
              <div class="p-2 {i == 6 ? 'pr-0' : ''} bg-white hide-divide-left hide-divide-bottom">
                <div class="text-center uppercase font-medium text-sm">
                  <p>11</p>
                  <p>Sun</p>
                </div>
              </div>
            {/each}

            <div class="p-2 pl-0 bg-white">
              <div class="px-4 py-3 font-medium text-sm rounded bg-[var(--bg)]">
                <div class="flex space-x-2 justify-between items-center">
                  <div>
                    <p class="text-second">Assignet Total</p>
                    <p class="pt-1">oh of 56h</p>
                  </div>
                  <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                  </span>
                </div>
              </div>
            </div>
            {#each new Array(7) as _, i}
              <div class="p-2 {i == 6 ? 'pr-0' : ''} bg-white hide-divide-left">
                <div class="h-full text-center px-4 py-2 font-medium text-sm text-second rounded bg-[var(--bg)]">
                  <div class="h-full flex items-center justify-center">00h of 08h</div>
                </div>
              </div>
            {/each}

            {#each new Array(3) as _}
              <div class="p-2 pl-0 bg-white">
                <div class="h-full px-4 py-4 font-medium text-sm rounded bg-[var(--bg)]">
                  <div class="h-full flex space-x-2 justify-between">
                    <div class="flex-none w-10 h-10 rounded-full overflow-hidden bg-primary">
                      <img src="" alt="">
                    </div>
                    <div>
                      <p class="text-second text-base">Assignet Total</p>
                      <p class="pt-1">20h, Barmen</p>
                      <p class="pt-1 font-normal">oh of 12h (00h)</p>
                    </div>
                    <span class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                    </span>
                  </div>
                </div>
              </div>
              {#each new Array(7) as _, i}
                <div class="p-2 {i == 6 ? 'pr-0' : ''} bg-white">
                  <div class="h-full min-h-[150px] flex flex-col space-y-2">
                    <div class="barmen-card">
                      <div class="card-text-1">09 - 13 <span>30m</span></div>
                      <div class="card-text-2">Barmen Place</div>

                      <button class="card-adjust">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path><path d="M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7z"></path></svg>
                      </button>
                    </div>

                    <div class="barmen-card orange">
                      <div class="card-text-1">09 - 13 <span>30m</span></div>
                      <div class="card-text-2">Barmen Place</div>

                      <button class="card-adjust">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path><path d="M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7z"></path></svg>
                      </button>
                    </div>

                    <button class="flex-grow min-h-0 w-full grid place-items-center border-2 border-transparent rounded-lg border-dotted hover3border-[var(--primary)] hover:text-primary">
                      <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                      </span>
                    </button>
                  </div>
                </div>
              {/each}
            {/each}
          </div>
        </div>
      </div>
      
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
    </div>
  </div>
</div>

<style lang="postcss">
  .schedule {
    @apply grid grid-cols-[14rem_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[1px] bg-gray-100 border-b border-gray-100;
  }

  .schedule .hide-divide-left {
    @apply relative before:content-[''] before:absolute before:w-[1px] before:h-full before:left-[-1px] before:top-0 before:bg-white;
  }

  .schedule .hide-divide-bottom {
    @apply relative after:content-[''] after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-[-1px] after:bg-white;
  }

  .schedule .barmen-card {
    @apply rounded-lg overflow-hidden relative;
  }

  /* green */

  .schedule .barmen-card .card-text-1 {
    @apply px-4 py-3 bg-[var(--green)] text-white;
  }
  .schedule .barmen-card .card-text-1 > span {
    @apply text-[var(--green-2)];
  }

  .schedule .barmen-card .card-text-2 {
    @apply px-4 py-3 bg-[var(--green-2)] text-white;
  }

  .schedule .barmen-card .card-adjust {
    @apply icon text-white absolute top-1 right-1 p-1 rounded-full hover:bg-[var(--green-2)];
  }

  /* orange */

  .schedule .barmen-card.orange .card-text-1 {
    @apply px-4 py-3 bg-[var(--orange)] text-white;
  }
  .schedule .barmen-card.orange .card-text-1 > span {
    @apply text-[var(--orange-2)];
  }

  .schedule .barmen-card.orange .card-text-2 {
    @apply px-4 py-3 bg-[var(--orange-2)] text-white;
  }

  .schedule .barmen-card.orange .card-adjust {
    @apply icon text-white absolute top-1 right-1 p-1 rounded-full hover:bg-[var(--orange-2)];
  }
</style>