// import types
import type { DataRow } from "./data";

// define finder function type
type Finder = (s: string) => Array<DataRow>;

// define searcher interface
interface Searcher {
  find: Finder;
}

interface Data extends DSVParsedArray<T> {}
