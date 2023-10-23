<script lang="ts">
  // import searcher
  import searcher from "../utils/searcher";

  // import interface
  import type { Data, DataRow } from "../types/data";

  export let data: Data;
  export let placeholder: string = "Search...";

  const search: any = searcher(data);

  // declare variables
  let query: string;
  let searchResults: Array<DataRow>;

  // declare reactive variables
  $: if (query) searchResults = search.find(query);
</script>

<div class="search-bar">
  <input
    type="search"
    autocomplete="off"
    {placeholder}
    aria-label="Search"
    bind:value={query}
  />
  <div>
    {#if searchResults && searchResults.length && query.length >= 2}
      {#each searchResults as result}
        <p>{result.drug}</p>
      {/each}
    {:else if query && query.length >= 2}
      <p>No results found</p>
    {/if}
  </div>
</div>

<style>
  .search-bar {
    width: 100%;
  }

  .search-bar input {
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
  }

  .search-bar input:focus {
    outline: none;
    border-color: #000;
  }
</style>
