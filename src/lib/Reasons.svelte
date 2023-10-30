<script lang="ts">
  import type { DataRow } from "../types/data";
  import "./global.css";

  // properties
  export let properties: (keyof DataRow)[];
  export let value: DataRow;
</script>

<div class="row">
  {#each properties as flag, i}
    <div class="flag flag-{i}">
      <span>{value[flag]}</span>
    </div>
  {/each}
</div>
