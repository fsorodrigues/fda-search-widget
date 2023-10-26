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
  let selectedResult: DataRow;

  // declare reactive variables
  $: if (query) searchResults = search.find(query);

  // function handleSelectResult(result: DataRow) {
  //   console.log(result);
  //   query = result.drug;
  //   selectedResult = result;
  // }
</script>

<div class="search-bar">
  <input
    type="search"
    autocomplete="off"
    {placeholder}
    aria-label="Search"
    bind:value={query}
  />
  <div class="search-options">
    {#if searchResults && searchResults.length && query.length >= 2}
      {#each searchResults as result}
        <p class="option">{result.drug}</p>
      {/each}
    {:else if query && query.length >= 2}
      <p class="no-results">No results found</p>
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

  .option {
    border-bottom: 1px solid #ccc;
  }

  .option.option:last-child {
    border-bottom: none;
  }
</style>
