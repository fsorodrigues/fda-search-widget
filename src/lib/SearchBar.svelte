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
</script>

<div class="search-bar">
  <input
    aria-label="Search"
    type="search"
    {placeholder}
    bind:value={$searchStore.search}
  />
    <div class="suggestions">
      {#each $searchStore.filtered as option, i}
        <div
          class="option"
          class:highlight={i === 0}
          on:click={() => {
            $searchStore.selected = option.obj;
            $searchStore.search = option.target;
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
  }

  .search-bar input {
    height: var(--search-bar-height);
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
