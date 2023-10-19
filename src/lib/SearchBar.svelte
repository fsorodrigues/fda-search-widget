<script lang="ts">
  import type { Data } from "../types/data";

  export let data: Data[];
  export let placeholder: string = "Search...";
</script>

<div class="search-bar">
  <input type="search" {placeholder} aria-label="Search" on:change={() => {}} />
</div>
