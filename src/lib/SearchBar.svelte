<script lang="ts">
  // import from node_modules
  import { onDestroy } from "svelte";

  // import local modules
  import { createSearchStore } from "../stores/search";

  // import searcher
  import { searcher, finder } from "../utils/searcher";

  // import interface
  import type { Data } from "../types/data";

  export let data: Data;
  export let placeholder: string = "Search...";

  const searchStore: any = createSearchStore(searcher(data));
  const unsubscribe = searchStore.subscribe((d: any) =>
    finder(d)
  );

  onDestroy(() => {
    unsubscribe();
  });

  // $: console.log($searchStore.filtered);
  $: console.log($searchStore.selected);
</script>

<div class="search-bar">
  <input
    aria-label="Search"
    type="search"
    {placeholder}
    bind:value={$searchStore.search}
  />
  {#if !$searchStore.selected}
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
  {/if}
</div>

<style>
  .highlight {
    background-color: #f5f5f5;
  }
</style>
