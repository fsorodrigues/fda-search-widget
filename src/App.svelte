<script lang="ts">
  // import from node_modules
  import { onMount } from "svelte";

  // import util to load data
  import loadData from "./utils/load-data";

  // import component
  import SearchBar from "./lib/SearchBar.svelte";

  // import type declaration
  import type { Data } from "./types/data";

  // on mount, load data from csv
  onMount(async () => {
    const data: Data[] = await loadData("/assets/data.csv");
    console.log(data);
  });
</script>

<div class="widget">
  <SearchBar />
</div>

<style>
</style>
