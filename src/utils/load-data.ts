// import csv from d3-fetch
import { csv } from "d3-fetch";
import { autoType } from "d3-dsv";

// import data type
import type { Data } from "../types/data";

// add documentation here
async function loadData(url: string): Promise<Data> {
  return await csv(url, autoType);
}

export default loadData;
