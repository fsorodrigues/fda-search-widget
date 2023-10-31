// import types
import type { FlagMap, MapMap } from "../types/mappers";

const mapOpening: FlagMap = new Map([
  [true, "rigorous"],
  [false, "not rigorous"],
]);

const mapBlinding: FlagMap = new Map([
  [true, "Testing was blinded"],
  [false, "Testing was not blinded"],
]);
const mapReplication: FlagMap = new Map([
  [true, "Testing was replicated"],
  [false, "Testing was not replicated"],
]);
const mapControl: FlagMap = new Map([
  [true, "Control arm present"],
  [false, "Control arm not present"],
]);
const mapClinical: FlagMap = new Map([
  [true, "Clinical"],
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
