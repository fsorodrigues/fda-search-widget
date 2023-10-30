<script lang="ts">
  // import from node_modules
  import { onDestroy } from "svelte";

  // import local modules
  import { createSearchStore } from "../stores/search";

  // import searcher
  import { searcher, finder } from "../utils/searcher";

  // import interface
  import type { Data, DataRow } from "../types/data";

  export let data: Data;
  export let placeholder: string = "Search...";
  export let selected: DataRow;

  const searchStore: any = createSearchStore(searcher(data));
  const unsubscribe = searchStore.subscribe((d: any) =>
    finder(d)
  );

  onDestroy(() => {
    unsubscribe();
  });

  // $: console.log($searchStore.filtered);
  $: selected = $searchStore.selected;
  $: searching = false;
</script>

<div class="search-bar">
  <input
    aria-label="Search"
    type="search"
    {placeholder}
    bind:value={$searchStore.search}
    on:input={() => {
      searching = true;
    }}
  />
<div class="search">
  <div class="search-bar">
    {#if true}
      <div
        class="reset"
        on:click={clearSearch}
        on:keydown={(ev) => {
          if (ev.key === "Enter") clearSearch();
        }}
        role="button"
        tabindex="0"
      >
        X
      </div>
    {/if}
  </div>
  {#if searching}
    <div class="suggestions">
      {#each $searchStore.filtered as option, i}
        <div
          class="option"
          class:highlight={i === 0}
          on:click={() => {
            $searchStore.selected = option.obj;
            $searchStore.search = option.target;
            searching = false;
          }}
          on:keydown={() => console.log(option.target)}
          tabindex="0"
          role="button"
        >
          <span>{i} {option.obj.drug}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .search-bar {
    --search-bar-height: 35px;
    position: relative;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    /* width: 100%; */
  }

  .search-bar input {
    height: var(--search-bar-height);
    width: 100%;
  }

  .search-bar .reset {
    position: absolute;
    top: 0;
    right: 2px;
  }

  .suggestions {
    position: absolute;
    top: var(--search-bar-height);
  }

  .option {
    background-color: #fff;
  }

  .highlight {
    background-color: #f5f5f5;
  }
</style>
