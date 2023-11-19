import type { FlagMap } from "../types/mappers";

const mapper: FlagMap = new Map([
  ["Y", { value: "Yes", color: "red" }],
  ["N", { value: "No", color: "green" }],
  ["A", { value: "Added after approval", color: "red" }],
  ["W", { value: "Withdrawn after approval", color: "green" }],
]);

export default mapper;
