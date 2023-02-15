<script lang="ts">
  import { browser } from "$app/environment";
  import Header from "$lib/components/header.svelte";
  import { onMount } from "svelte";
  import { authStore } from "../../stores/auth_store";
  import { fetchBusiness } from "../../stores/business";
  import { fetchUserInfo } from "../../stores/user";

  onMount( () => {
    Promise.all([
      fetchBusiness(),
      fetchUserInfo()
    ])
  })
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <div class="flex-grow min-h-0 flex items-stretch">
    <div class="w-full">
      <slot />
    </div>
  </div>
</div>