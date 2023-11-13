<script lang="ts">
  // import mapper
  import { mapOpening, mapReasons } from "../mappers/reasons";

  // import types
  import type { DataRow } from "../types/data";

  // import styles
  import "./global.css";

  // properties
  export let properties: (keyof DataRow)[];
  export let value: DataRow;

  function getValue(f: string): string {
    return mapReasons.get(f)!.get(false)!;
  }
</script>

{#if !value.flag_evidence}
  <div class="row">
    <div class="opening">
      Why minimal standards were <span
        >{mapOpening.get(value.flag_evidence)}</span
      >
    </div>
    <div class="reasons">
      {#each properties.filter((d) => d !== "flag_evidence") as flag, i}
        {#if !value[flag]}
          <span class="flag flag-{i}">{getValue(flag)}</span>
        {/if}
      {/each}
    </div>
  </div>
{/if}

<style>
  .opening {
    font-weight: bold;
    grid-column: 1 / span last-line;
    grid-row: 1 / span 1;
  }

  .reasons {
    grid-column: 1 / span last-line;
    grid-row: 2 / span 1;
  }

  .reasons .flag:after {
    content: ". ";
  }
</style>
