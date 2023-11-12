<script lang="ts">
  export let searchStore: any;
  export let suggestedIndex: number;

  function setFocusToTextBox() {
    document.getElementById("search-input")!.focus();
  }

  function clearSearch() {
    $searchStore.search = "";
    $searchStore.filtered = [];
    $searchStore.selected = null;
    suggestedIndex = 0;
    setFocusToTextBox();
  }
</script>

<div
  class="reset-button"
  on:click={clearSearch}
  on:keydown={clearSearch}
  role="button"
  tabindex="0"
>
  <span>Search for another drug</span>
</div>

<style>
  .reset-button {
    height: var(--search-bar-height);
    padding: 8px 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0e75a5;
    border: 1pt solid #042e49;
    color: #fff;
    font-weight: 600;
    font-size: 1em;
  }
</style>
