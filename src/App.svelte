<script lang="ts">
  // import from node_modules
  import { onMount } from "svelte";

  // import util to load data
  import loadData from "./utils/load-data";

  // import component
  import SearchBar from "./lib/SearchBar.svelte";

  // import type declaration
  import type { Data } from "./types/data";

  // declare variables
  let data: Data;

  // on mount, load data from csv
  onMount(async () => {
    data = await loadData("/assets/data.csv");
  });
</script>

<div class="widget">
  {#if data}
    <SearchBar {data} placeholder="Search..." />
  {:else}
    <p>Loading...</p>
  {/if}
</div>

<style>
</style>
