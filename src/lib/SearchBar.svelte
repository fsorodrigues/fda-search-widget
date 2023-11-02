<script lang="ts">
  // import from node_modules
  import { onDestroy } from "svelte";

  // import local modules
  import { createSearchStore } from "../stores/search";

  // import icons
  import X from "../icons/x.svelte";

  // import searcher
  import { searcher, finder } from "../utils/searcher";

  // import components
  import Option from "./Option.svelte";

  // import interface
  import type { Data, DataRow } from "../types/data";
  import type { Unsubscriber } from "svelte/store";

  export let data: Data;
  export let placeholder: string = "Search...";
  export let selected: DataRow;

  const searchStore: any = createSearchStore(searcher(data));
  const unsubscribe: Unsubscriber =
    searchStore.subscribe(finder);

  onDestroy(() => {
    unsubscribe();
  });

  function setFocusToTextBox() {
    document.getElementById("search-input")!.focus();
  }

  function setIndex(i: number) {
    suggestedIndex = i;
  }

  function clearSearch() {
    $searchStore.search = "";
    $searchStore.filtered = [];
    setIndex(0);
    setFocusToTextBox();
  }
  function arrowDown() {
    suggestedIndex++;
    if (suggestedIndex >= $searchStore.filtered.length)
      setIndex(0);
  }
  function arrowUp() {
    suggestedIndex--;
    if (suggestedIndex < 0)
      setIndex($searchStore.filtered.length - 1);
  }

  $: selected = $searchStore.selected;
  $: searching = false;
  $: suggestedIndex = 0;
</script>

<div class="search">
  <div class="search-bar">
    <input
      id="search-input"
      class:hasSelected={selected}
      aria-label="Search"
      type="text"
      {placeholder}
      bind:value={$searchStore.search}
      on:input={() => {
        searching = true;
      }}
      on:keydown={(ev) => {
        if (ev.key === "Escape") clearSearch();
        if (ev.key === "ArrowDown") {
          ev.preventDefault();
          arrowDown();
        }
        if (ev.key === "ArrowUp") {
          ev.preventDefault();
          arrowUp();
        }
        if (ev.key === "Enter") {
          $searchStore.selected =
            $searchStore.filtered[suggestedIndex].obj;
          $searchStore.search =
            $searchStore.filtered[suggestedIndex].target;
          searching = false;
          document.activeElement.blur();
        }
      }}
    />
    {#if $searchStore.search !== ""}
      <div
        class="reset"
        on:click={clearSearch}
        on:keydown={(ev) => {
          if (ev.key === "Enter") clearSearch();
        }}
        role="button"
        tabindex="0"
      >
        <X />
      </div>
    {/if}
    {#if searching && $searchStore.showSuggestions}
      <div class="suggestions">
        {#if $searchStore.filtered.total && $searchStore.filtered.total > 0}
          {#each $searchStore.filtered as option, i}
            <Option
              highlight={i === suggestedIndex}
              onClick={() => {
                $searchStore.selected = option.obj;
                $searchStore.search = option.target;
                searching = false;
                document.activeElement.blur();
              }}
              {option}
            />
          {/each}
        {:else}
          <span>no results</span>
        {/if}
      </div>
    {/if}
  </div>
</div>

<style>
  .search {
    margin-bottom: 10px;
  }

  .search-bar {
    --search-bar-height: 35px;
    position: relative;
  }

  .search-bar input {
    height: var(--search-bar-height);
    width: 100%;
    border: 1px solid black;
    border-radius: 0;
    position: relative;
    z-index: 15;
    -webkit-appearance: textfield;
    appearance: textfield;
  }

  .search-bar input:focus,
  .search-bar input:focus-visible {
    outline-style: solid;
    outline-width: 1pt;
    outline-offset: -1px;
    outline-color: salmon;
  }

  .search-bar .hasSelected {
    border: none;
    border-bottom: 1px solid salmon;
  }

  .search-bar .reset {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2px;
    z-index: 20;
  }

  .suggestions {
    position: absolute;
    top: calc(var(--search-bar-height) - 1px);
    width: 100%;
    background-color: #fff;
    z-index: 10;
  }
</style>
