<script>
  import { page } from "$app/stores";
  $:path = ($page.url.pathname + "/").split('/')[2] || ""
</script>

<div class="w-full h-full flex items-stretch">
  <div class="flex-none w-72 bg-[var(--bg)] py-8 px-8">
    <div class="flex flex-col space-y-8">
      <a href="/staff" class="font-medium hover:text-primary {path == "" ? 'text-primary' : ''}">Employees</a>
      <a href="/staff/positions" class="font-medium hover:text-primary {path == "positions" ? 'text-primary' : ''}">Positions</a>
      <a href="/staff/teams" class="font-medium hover:text-primary {path == "teams" ? 'text-primary' : ''}">Teams</a>
      <a href="/staff/locations" class="font-medium hover:text-primary {path == "locations" ? 'text-primary' : ''}">Locations</a>
    </div>
  </div>

  <div class="flex-grow min-w-0 py-6 px-8">
    <slot/>
  </div>
</div>