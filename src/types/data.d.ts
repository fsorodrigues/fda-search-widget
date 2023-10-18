import type { DSVParsedArray } from "d3-dsv";

export interface DataRow {
  drug_slug: string;
  slug: string;
  flag_1: boolean;
  flag_2: boolean;
}

interface Data extends DSVParsedArray<T> {}
