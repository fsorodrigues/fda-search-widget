// create a closure for searching with two functions
// attached to it. The closure will initialize the search
// and expose a find methord to search for a string in an
// array of objects

// import types
import type { Data } from "../types/data";

function searcher(array: Data): any {
  return array;
  // use fuzzysort to prepare data for fuzzy searching
  return array.map((d) => ({
    ...d,
    prepared: fuzzysort.prepare(d.drug),
  }));
}

function finder(store: any) {
  //
  const searchTerm = store.search;
  if (searchTerm.length > 2) {
    console.log(searchTerm);
    store.filtered = store.data;
  }
}

export { searcher, finder };
