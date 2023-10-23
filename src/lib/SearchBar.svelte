<script lang="ts">
  // import searcher
  import searcher from "../utils/searcher";

  // import interface
  import type { Data } from "../types/data";

  export let data: Data;
  export let placeholder: string = "Search...";

  let query: string;
  const search: any = searcher(data);
</script>

<div class="search-bar">
  <input
    type="search"
    {placeholder}
    aria-label="Search"
    on:input={() => {
      // console.log(search.find("aspirin"));
      console.log("here");
    }}
    on:change={() => {
      // console.log(search.find("aspirin"));
      console.log("here");
    }}
    bind:value={query}
  />
</div>

<style>
  .search-bar {
    width: 100%;
  }

  .search-bar input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.2s ease-in-out;
  }

  .search-bar input:focus {
    outline: none;
    border-color: #000;
  }
</style>
