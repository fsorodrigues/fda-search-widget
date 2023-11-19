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
  import Reset from "./lib/Reset.svelte";

  // declare variables
  let data: Data;
  let selected: DataRow;
  let searchStore: any;
  let suggestedIndex: number;
  let reasonProperties: (keyof DataRow)[] = [
    "flag_blinding",
    "flag_replication",
    "flag_control",
    "flag_clinical",
  ];

  // on mount, load data from csv
  onMount(async () => {
    data = await loadData("/assets/data.csv");
  });

  $: hasSelected = selected && selected.hasOwnProperty("drug");
</script>

<div class="widget">
  {#if !hasSelected}
    <label for="search-input" class="label"
      >Was drug rigorously tested?</label
    >
    <p class="subhead">Look up drugs approved from 2013-22</p>
  {/if}
  {#if data}
    <SearchBar
      {data}
      placeholder="Drug name"
      bind:selected
      bind:searchStore
      bind:suggestedIndex
    />
  {:else}
    <p>Loading...</p>
  {/if}

  <div class="content">
    {#if hasSelected}
      <Condition value={selected.treatment_condition} />
      <Warning value={selected.black_box} />
      <Testing value={selected.flag_evidence} />
      <Reasons value={selected} properties={reasonProperties} />
      <Reset {searchStore} {suggestedIndex}></Reset>
    {/if}
  </div>
</div>

<style>
  .widget {
    border-radius: 3%;
    background-color: var(--background-color);
    padding: 30px;
  }

  .label {
    font-size: 1.3em;
    font-weight: bold;
  }

  .subhead {
    margin: 10px 0 15px 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
</style>
