<script lang="ts">
  // import from node_modules
  import fuzzysort from "fuzzysort";

  // property declaration
  export let highlight: boolean;
  export let onClick: Function;
  export let option: Result;
</script>

<div
  class="option"
  class:highlight
  on:click={() => onClick()}
  on:keydown={() => console.log(option.target)}
  tabindex="0"
  role="button"
>
  <span>{@html fuzzysort.highlight(option, "<b>", "</b>")}</span>
</div>

<style>
  .option {
    display: flex;
    align-items: center;
    padding: 0 2px;
    background-color: #fff;
    height: var(--search-bar-height);
  }

  .highlight {
    background-color: #f1f1f2;
  }

  .highlight span {
    text-decoration: underline;
  }
</style>
