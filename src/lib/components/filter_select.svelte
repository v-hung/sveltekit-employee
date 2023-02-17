<script lang="ts">
  import { clickOutside } from '$lib/utils/clickOutSide';
  import { slide } from 'svelte/transition';
  let clazz = "";
	export { clazz as class };

  export let data: any[]
  export let title: string
  export let choose: string

  let open = false
</script>

<button class="relative flex space-x-2 items-center {clazz}" 
  use:clickOutside 
  on:clickOutside={() => open = false}
  on:click={() => open = !open}
>
  <span class="text-sm">{title}</span>
  <button class="text-primary font-semibold">{choose}</button>

  <span class="icon !ml-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="transition-transform {open ? '-rotate-90' : ''}"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
  </span>

  {#if open}
    <div transition:slide class="absolute top-full left-1/2 -translate-x-1/2 w-max min-w-[150px] max-w-[200px] rounded-md bg-white border shadow">
      <div class="flex flex-col space-y-1 p-3">
        <button class="px-2 py-1 hover:bg-primary hover:text-white text-left rounded 
          {choose == "All" ? 'bg-primary text-white' : ''}"
          on:click|preventDefault|stopPropagation={() => choose = "All"}
        >All</button>

        {#each data as item}
          <button class="px-2 py-1 hover:bg-primary hover:text-white text-left rounded 
            {choose == item.title ? 'bg-primary text-white' : ''}"
            on:click|preventDefault|stopPropagation={() => choose = item.title}
          >{item.title}</button>
        {/each}
      </div>
    </div>
  {/if}
</button>