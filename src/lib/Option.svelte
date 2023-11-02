<script lang="ts">
  // import from node_modules
  import fuzzysort from "fuzzysort";

  // property declaration
  export let highlight: boolean;
  export let onClick: Function;
  export let option: Result;

  console.log();
</script>

<div
  class="option"
  class:highlight
  on:click={() => onClick()}
  on:keydown={() => console.log(option.target)}
  tabindex="0"
  role="button"
>
  <!-- <span>{option.obj.drug}</span> -->
  <span>{@html fuzzysort.highlight(option, "<b>", "</b>")}</span>
</div>

<style>
  .option {
    display: flex;
    align-items: center;
    padding: 0 2px;
    background-color: #fff;
    height: var(--search-bar-height);
    border: 1px solid #fff;
  }

  .highlight {
    /* background-color: #d3d3d3; */
    border: 1px solid salmon;
  }
</style>
