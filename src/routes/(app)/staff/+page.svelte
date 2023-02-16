<script lang="ts">
  let tab: "personal" | "archive" = "personal"
</script>

<div class="flex items-center space-x-4">
  <h3 class="text-xl text-primary font-semibold">
    Team 
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
    on:click|preventDefault={() => tab = "personal"}
  >Archive</button>
</div>

{#if tab == "personal"}
{:else if tab == "archive"}
{/if}

<style lang="postcss">
  .tab.active {
    @apply text-[var(--primary)];
  }

  .tab.active::after {
    @apply absolute content-[''] bottom-[-1px] left-0 w-full h-0.5 bg-[var(--primary)];
  }
</style>