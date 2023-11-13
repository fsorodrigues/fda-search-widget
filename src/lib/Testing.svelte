<script lang="ts">
  // import mapper
  import mapper from "../mappers/testing";

  // import styles
  import "./global.css";

  // properties
  export let value: boolean;
</script>

<div class="row">
  <div class="label">Minimal FDA standards met</div>
  <div class="value box"><div>{mapper.get(value)}</div></div>
</div>

<style>
  .value {
    background-color: var(--chilli-red);
  }
</style>
