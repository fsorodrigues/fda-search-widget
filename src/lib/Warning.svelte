<script lang="ts">
  // import mapper
  import mapper from "../mappers/warning";

  // import types
  import type { MapValue } from "../types/mappers";

  // import styles
  import "./global.css";

  // properties
  export let value: string;

  let fromMap: MapValue = mapper.get(value) as MapValue;
  let { color, value: label } = fromMap;
</script>

<div class="row">
  <div class="label">Black box warning</div>
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
