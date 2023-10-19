<script lang="ts">
  // import searcher
  import searcher from "../utils/searcher";

  // import interface
  import type { Data } from "../types/data";

  export let data: Data;
  export let placeholder: string = "Search...";

  const search = searcher(data);
</script>

<div class="search-bar">
  <input
    type="search"
    {placeholder}
    aria-label="Search"
    on:change={() => {
      // console.log();
      search.find("aspirin");
    }}
  />
  {data.length}
</div>
