<script lang="ts">
  import Header from "$lib/components/header.svelte";

  export let data
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <div class="flex-grow min-h-0 flex items-stretch">
    <div class="w-full">
      <slot />
    </div>
  </div>
</div>