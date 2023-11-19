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
    return mapReasons.get(f)!.get(false) as string;
  }
</script>

{#if !value.meets_standard}
  <div class="row">
    <div class="opening">
      Why minimal standards were <span
        >{mapOpening.get(value.meets_standard)}</span
      >
    </div>
    <div class="reasons">
      {#each properties.filter((d) => d !== "meets_standard") as flag, i}
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
    border-bottom: 1px solid #999;
    padding-bottom: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .opening span {
    color: #fff;
    background-color: var(--chilli-red);
  }

  .reasons {
    grid-column: 1 / span last-line;
    grid-row: 2 / span 1;
    /* margin-bottom: 20px; */
  }

  .reasons .flag:after {
    content: ". ";
  }
</style>
