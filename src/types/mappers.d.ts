export interface MapValue {
  value: string;
  color: string;
}
export type FlagMap = Map<boolean | string, string | MapValue>;
export type MapMap = Map<string, FlagMap>;
