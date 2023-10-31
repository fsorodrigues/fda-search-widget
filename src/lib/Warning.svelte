<script lang="ts">
  // import mapper
  import mapper from "../mappers/warning";
  import "./global.css";

  // properties
  export let value: boolean;
</script>

<div class="row">
  <div class="label">Condition treated</div>
  <div class="value box">{mapper.get(value)}</div>
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
