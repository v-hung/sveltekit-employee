<script lang="ts">
	import '../app.css';
  import { navigating } from "$app/stores";
  import { onMount } from 'svelte';
  import { authStore } from '../stores/auth_store';
  import { auth } from '$lib/client/fb';

  let line_process: HTMLElement | null = null
  $: watchRoute($navigating)

  const watchRoute = (navigating: any) => {
    if (!line_process) return

    if (navigating) {
      // line_process.style.width = '0'
      line_process.style.transition = 'all 2s'
      line_process.style.width = '70%'
      // setTimeout(() => {
      // }, 0);
    }
    else {
      line_process.style.width = '100%'
      line_process.style.transition = 'all .1s'
      setTimeout(() => {
        if (line_process) {
          line_process.style.width = '0'
          line_process.style.transition = null as any
        }
      }, 100);
    }
  }

  onMount(() => {
    auth.onAuthStateChanged((user) => {
      authStore.set({
        isLoggedIn: user !== null,
        user,
        firebaseControlled: true,
      });
    });
  })
</script>

<div id="app">
  <div class="line">
    <div bind:this={line_process} class="line-process"></div>
  </div>
  <slot />
</div>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  #app {
    font-family: 'Roboto', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 95%;
  }
  .line {
    @apply fixed w-full h-0.5 top-0 left-0 z-50;
  }
  .line .line-process {
    @apply absolute w-0 h-full bg-orange-600 ease-out;
  }
</style>