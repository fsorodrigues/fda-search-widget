// create a closure for searching with two functions
// attached to it. The closure will initialize the search
// and expose a find methord to search for a string in an
// array of objects

// import fuzzysort
import fuzzysort from "fuzzysort";

// import types
import type { Data } from "../types/data";

function searcher(array: Data): any {
  // use fuzzysort to prepare data for fuzzy searching
  return array.map((d) => ({
    ...d,
    prepared: fuzzysort.prepare(d.drug),
  }));
}

function finder(store: any) {
  const searchTerm = store.search;
  if (searchTerm.length > 2) {
    store.filtered = fuzzysort.go(searchTerm, store.data, {
      key: "prepared",
      limit: 5,
      threshold: -10000,
    });
  }
}

export { searcher, finder };
