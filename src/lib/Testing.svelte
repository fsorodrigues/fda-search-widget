<script lang="ts">
  import "./global.css";

  // properties
  export let value: boolean;
</script>

<div class="row">
  <div class="label">Condition treated</div>
  <div class="value">{value}</div>
</div>

<style>
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .row .label {
    grid-column: 1 / span 1;
  }

  .row .value {
    grid-column: 2 / span 1;
  }
</style>
