<script lang="ts">
  // import from node_modules
  import { onDestroy } from "svelte";

  // import local modules
  import { createSearchStore } from "../stores/search";

  // import searcher
  import { finder } from "../utils/searcher";

  // import interface
  import type { Data } from "../types/data";

  export let data: Data;
  export let placeholder: string = "Search...";

  const searchStore: any = createSearchStore(data);
  const unsubscribe = searchStore.subscribe((d: any) =>
    finder(d)
  );

  onDestroy(() => {
    unsubscribe();
  });

  $: console.log($searchStore);

  // const search = searcher(data);
</script>

<div class="search-bar">
  <input
    aria-label="Search"
    type="search"
    {placeholder}
    bind:value={$searchStore.search}
  />
  <!-- on:change={() => { -->
  <!--   console.log("here"); -->
  <!--   // search.find("aspirin"); -->
  <!-- }} -->
  {data.length}
</div>
