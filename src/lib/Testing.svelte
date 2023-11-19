<script lang="ts">
  // import mapper
  import mapper from "../mappers/testing";

  // import types
  import type { MapValue } from "../types/mappers";

  // import styles
  import "./global.css";

  // properties
  export let value: boolean;

  let fromMap: MapValue = mapper.get(value) as MapValue;
  let { color, value: label } = fromMap;
</script>

<div class="row">
  <div class="label">Minimal FDA standards met</div>
  <div class="value box {color}">
    <div>{label}</div>
  </div>
</div>

<style>
  .green {
    background-color: var(--jungle-green);
  }
  .red {
    background-color: var(--chilli-red);
  }
</style>
