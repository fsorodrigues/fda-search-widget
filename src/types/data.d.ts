import type { DSVParsedArray } from "d3-dsv";

interface DataRow {
  drug_slug: string;
  drug: string;
  treatment_condition: string;
  url: string;
  black_box: string;
  flag_evidence: boolean;
  flag_blinding: boolean;
  flag_replication: boolean;
  flag_control: boolean;
  flag_surrogate: boolean;
}

interface Data extends DSVParsedArray<T> {}

export { DataRow, Data };
