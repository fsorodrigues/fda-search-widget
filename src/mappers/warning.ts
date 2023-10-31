import type { FlagMap } from "../types/mappers";

const mapper: FlagMap = new Map([
  ["Y", "Yes"],
  ["N", "No"],
  ["A", "Added after approval"],
  ["W", "Withdrawn after approval"],
]);

export default mapper;
