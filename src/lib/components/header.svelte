<script>
  import { page } from "$app/stores";
  import Logo from "$lib/svg/logo.svelte";
  import { authStore } from "../../stores/auth_store";
  import { businessStore } from "../../stores/business";
</script>
<div class="sticky top-0 left-0 shadow bg-white">
  <div class="flex space-x-8 px-8 py-2">
    <a href="/">
      <Logo class="flex-none text-primary w-12 h-12" />
    </a>

    <div class="flex-none flex items-center space-x-3 border-r cursor-pointer">
      <div class="flex-none w-12 h-12 rounded-full bg-blue-100 overflow-hidden">
        <img src="{$businessStore?.image}" alt="{$businessStore?.title}" class="w-full h-full object-cover" loading="lazy">
      </div>

      <div class="text-sm">
        <p>Business</p>
        <!-- svelte-ignore a11y-missing-content -->
        <h5 class="font-medium text-second">{$businessStore?.title}</h5>
      </div>

      <div class="px-4">
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
        </span>
      </div>
    </div>

    <div class="flex items-center space-x-6">
      <a href="/" class="font-medium hover:text-primary {$page.url.pathname == "/" ? 'text-primary' : ''}">Schedule</a>
      <a href="/messenger" class="font-medium hover:text-primary {$page.url.pathname == "/messenger" ? 'text-primary' : ''}">Messenger</a>
      <a href="/reports" class="font-medium hover:text-primary {$page.url.pathname == "/reports" ? 'text-primary' : ''}">Reports</a>
      <a href="/staff" class="font-medium hover:text-primary {$page.url.pathname == "/staff" ? 'text-primary' : ''}">Staff</a>
    </div>

    <div class="!ml-auto flex items-center space-x-2 cursor-pointer">
      <div class="flex-none w-10 h-10 rounded-full bg-primary overflow-hidden">
        <img src="{$authStore.user?.image}" alt="{$authStore.user?.displayName}" class="w-full h-full object-cover" loading="lazy">
      </div>
      <h5 class="">{$authStore.user?.name}</h5>
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
      </span>
    </div>
  </div>
</div>