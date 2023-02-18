<script lang="ts">
  import { clickOutside } from "$lib/utils/clickOutSide";
  import { slide } from "svelte/transition";

  let clazz = "";
	export { clazz as class };

  export let data: any[]
  export let choose = data[0].id

  let open = false
</script>

<div class="relative {clazz}"
  use:clickOutside 
  on:clickOutside={() => open = false}
>
  <button 
    class="w-full bg-[var(--bg)] rounded-lg px-4 py-2 border border-gray-200 flex justify-between items-center space-x-2"
    on:click={() => open = !open}
  >
    <span>{data.find(v => v.id == choose)?.title || "None"}</span>
    <span class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="transition-transform {open ? '-rotate-90' : ''}"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
    </span>
  </button>

  {#if open}
    <div transition:slide class="absolute top-full left-1/2 -translate-x-1/2 w-full rounded-md bg-white border shadow overflow-hidden">
      <div class="flex flex-col max-h-32 overflow-y-auto">
        {#each data as item}
          <button class="px-4 py-2 hover:bg-primary hover:text-white text-left 
            {choose == item.title ? 'bg-[var(--primary-2)] text-white' : ''}"
            on:click|preventDefault|stopPropagation={() => {choose = item.id; open = false}}
          >{item.title}</button>
        {/each}
      </div>
    </div>
  {/if}
</div>