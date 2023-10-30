<script lang="ts">
  import type { DataRow } from "../types/data";
  import "./global.css";

  // properties
  export let properties: (keyof DataRow)[];
  export let value: DataRow;

  function parseEvidenceFlag(value: boolean) {
    return value ? "rigorous" : "not rigorous";
  }
</script>

<div class="row">
  <div class="opening">
    Reasons testing was <span
      >{parseEvidenceFlag(value.flag_evidence)}</span
    >
  </div>
  <div class="reasons">
    {#each properties.filter((d) => d !== "flag_evidence") as flag, i}
      <div class="flag flag-{i}">
        <span>{value[flag]}</span>
      </div>
    {/each}
  </div>
</div>
