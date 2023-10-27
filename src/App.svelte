<script lang="ts">
  // import from node_modules
  import { onMount } from "svelte";

  // import util to load data
  import loadData from "./utils/load-data";

  // import component
  import SearchBar from "./lib/SearchBar.svelte";

  // import type declaration
  import type { Data, DataRow } from "./types/data";
  import Condition from "./lib/Condition.svelte";
  import Warning from "./lib/Warning.svelte";
  import Testing from "./lib/Testing.svelte";
  import Reasons from "./lib/Reasons.svelte";

  // declare variables
  let data: Data;
  let selected: DataRow;

  // on mount, load data from csv
  onMount(async () => {
    data = await loadData("/assets/data.csv");
  });

  $: hasSelected = selected && selected.hasOwnProperty("drug");
</script>

<div class="widget">
  {#if data}
    <SearchBar {data} placeholder="Search..." bind:selected />
  {:else}
    <p>Loading...</p>
  {/if}

  {#if hasSelected}
    <Condition value={selected.treatment_condition} />
    <Warning />
    <Testing />
    <Reasons />
  {/if}
</div>

<style>
</style>
