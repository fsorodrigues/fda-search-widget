<script lang="ts">
  // import mapper
  import mapper from "../mappers/testing";

  // import styles
  import "./global.css";

  // properties
  export let value: boolean;
</script>

<div class="row">
  <div class="value box">{mapper.get(value)}</div>
  <div class="label">Minimal FDA standards met</div>
</div>

<style>
  .value {
    background-color: red;
  }
</style>
