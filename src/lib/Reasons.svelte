<script lang="ts">
  // import mapper
  import { mapOpening, mapReasons } from "../mappers/reasons";
  import type { DataRow } from "../types/data";
  import "./global.css";

  // properties
  export let properties: (keyof DataRow)[];
  export let value: DataRow;
</script>

<div class="row">
  <div class="opening">
    Reasons testing was <span
      >{mapOpening.get(value.flag_evidence)}</span
    >
  </div>
  <div class="reasons">
    {#each properties.filter((d) => d !== "flag_evidence") as flag, i}
      {@const mapper = mapReasons.get(flag)}
      <span class="flag flag-{i}">{mapper.get(value[flag])}</span
      >
    {/each}
  </div>
</div>
