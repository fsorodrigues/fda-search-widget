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
  export let searchStore: any = createSearchStore(
    searcher(data)
  );
  export let suggestedIndex: number = 0;

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
    $searchStore.selected = null;
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

  function setSelected(): void {
    $searchStore.selected =
      $searchStore.filtered[suggestedIndex].obj;
    $searchStore.search =
      $searchStore.filtered[suggestedIndex].target;
    searching = false;
  }

  function keyDown(ev: KeyboardEvent) {
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
      setSelected();
      (ev.target as HTMLElement).blur();
    }
  }

  function onClick() {
    setSelected();
    (document.activeElement as HTMLElement).blur();
  }

  $: selected = $searchStore.selected;
  $: searching = false;
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
      on:keydown={keyDown}
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
              {onClick}
              {option}
            />
          {/each}
        {:else}
          <span
            >No results. Only drugs approved between 2013-2022
            are listed.</span
          >
        {/if}
      </div>
    {/if}
  </div>
  <div
    class="submit-button"
    class:hasSelected={selected}
    on:click={onClick}
    on:keydown={keyDown}
    role="button"
    tabindex="0"
  >
    <span>➔</span>
  </div>
</div>

<style>
  .search {
    --search-bar-height: 35px;
    display: flex;
    margin-bottom: 10px;
  }

  .search-bar {
    position: relative;
    flex-grow: 1;
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
    outline-color: #999999;
  }

  .search-bar .hasSelected {
    border: none;
    border-bottom: 1px solid #999;
    background: none;
    font-size: 1.3em;
    font-weight: 600;
    padding-bottom: 10px;
    height: auto;
  }

  .search-bar .reset {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2px;
    z-index: 20;
  }

  .submit-button {
    width: var(--search-bar-height);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0e75a5;
    border: 1pt solid #042e49;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
  }

  .submit-button.hasSelected {
    display: none;
  }

  .suggestions {
    position: absolute;
    top: calc(var(--search-bar-height) - 1px);
    width: 100%;
    background-color: #fff;
    z-index: 10;
  }
</style>
