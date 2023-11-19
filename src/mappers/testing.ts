import type { FlagMap } from "../types/mappers";

const mapper: FlagMap = new Map([
  [true, { value: "Yes", color: "green" }],
  [false, { value: "No", color: "red" }],
]);

export default mapper;
