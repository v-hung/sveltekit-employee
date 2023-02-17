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
      
      <div class="mt-8 border-t pt-4">
        <div class="table w-full -mx-2">
          <div class="table-row">
            <div class="table-cell py-4 px-2 text-lg text-second font-medium w-60 align-middle">Employees</div>
            {#each new Array(7) as _}
              <div class="table-cell py-4 px-2">
                <div class="text-center uppercase font-medium text-sm">
                  <p>11</p>
                  <p>Sun</p>
                </div>
              </div>
            {/each}
          </div>

          <div class="table-row">
            <div class="table-cell py-4 px-2">
              <div class="px-4 py-2 font-medium text-sm rounded bg-[var(--bg)]">
                <div class="h-20 flex space-x-2 justify-between items-center">
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
            {#each new Array(7) as _}
              <div class="table-cell py-4 px-2">
                <div class="text-center px-4 py-2 font-medium text-sm text-second rounded bg-[var(--bg)]">
                  <div class="h-20 flex items-center">00h of 08h</div>
                </div>
              </div>
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