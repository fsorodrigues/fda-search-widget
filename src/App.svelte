<script lang="ts">
  // import from node_modules
  import { onMount } from "svelte";
  import {
    slide,
    type TransitionConfig,
    type SlideParams,
  } from "svelte/transition";
  import { quadOut } from "svelte/easing";

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

  function drawer(
    _: HTMLElement,
    { duration, easing }: SlideParams
  ): TransitionConfig {
    return {
      delay: 50,
      duration,
      easing,
      css: (_: number, u: number) =>
        `transform: translateY(-${u * 100}%)`,
    };
  }
</script>

<div class="widget">
  <div class="spacer"></div>
  {#if !hasSelected}
    <div
      in:slide={{ duration: 250, easing: quadOut }}
      out:slide={{ duration: 100, easing: quadOut }}
    >
      <label for="search-input" class="label"
        >Was my drug rigorously tested?</label
      >
      <p class="subhead">Look up drugs approved from 2013-22</p>
    </div>
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

  <div class="content-wrapper">
    {#if hasSelected}
      <div
        class="content"
        in:drawer={{ duration: 500, easing: quadOut }}
        out:slide={{ duration: 100, easing: quadOut }}
      >
        <Condition value={selected.treatment_condition} />
        <Warning value={selected.black_box} />
        <Testing value={selected.meets_standard} />
        <Reasons
          value={selected}
          properties={reasonProperties}
        />
        <Reset {searchStore} {suggestedIndex}></Reset>
      </div>
    {/if}
  </div>
</div>

<style>
  .widget {
    --padding: 30px;
    border-radius: 3%;
    background-color: var(--background-color);
    padding: 0 var(--padding) var(--padding) var(--padding);
    position: relative;
    z-index: 10;
  }

  .spacer {
    height: var(--padding);
    position: relative;
    z-index: 20;
    background-color: var(--background-color);
  }

  .label {
    font-size: 1.15em;
    font-weight: bold;
  }

  .content-wrapper {
    overflow-y: hidden;
  }

  .subhead {
    margin: 10px 0 15px 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    position: relative;
    z-index: 5;
  }
</style>
