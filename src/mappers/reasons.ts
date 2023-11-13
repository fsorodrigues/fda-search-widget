// import types
import type { FlagMap, MapMap } from "../types/mappers";

const mapOpening: FlagMap = new Map([
  [true, "met"],
  [false, "not met"],
]);

const mapBlinding: FlagMap = new Map([
  [false, "Testing was not blinded"],
]);
const mapReplication: FlagMap = new Map([
  [false, "Testing was not replicated"],
]);
const mapControl: FlagMap = new Map([
  [false, "Control arm not present"],
]);
const mapClinical: FlagMap = new Map([
  [false, "Surrogate instead of clinical"],
]);

const mapReasons: MapMap = new Map([
  ["flag_blinding", mapBlinding],
  ["flag_replication", mapReplication],
  ["flag_control", mapControl],
  ["flag_clinical", mapClinical],
]);

export { mapOpening };
export { mapReasons };
