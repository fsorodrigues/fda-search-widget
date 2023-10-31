<script lang="ts">
  // import mapper
  import mapper from "../mappers/warning";

  // import styles
  import "./global.css";

  // properties
  export let value: string;
</script>

<div class="row">
  <div class="label">Black box warning</div>
  <div class="value box">{mapper.get(value)}</div>
</div>

<style>
  .value {
    background-color: green;
  }
</style>
