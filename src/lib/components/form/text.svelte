<script lang="ts">
  let clazz = "";
	export { clazz as class };
  export let data = ""
  export let placeholer = ""
</script>

<input type="text" class="w-full bg-[var(--bg)] rounded-lg px-4 py-2 border border-gray-200 {clazz}" bind:value={data} placeholder={placeholer}>