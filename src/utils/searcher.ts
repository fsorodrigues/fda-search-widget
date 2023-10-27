// create a closure for searching with two functions
// attached to it. The closure will initialize the search
// and expose a find methord to search for a string in an
// array of objects

// import types
import type { Data } from "../types/data";
import type { Searcher } from "../types/searcher";

function searcher(array: Data): any {
  return array;
}

function finder(store: any) {
  //
  const searchTerm = store.search;
  if (searchTerm.length > 2) {
    console.log(searchTerm);
    store.filtered = store.data[0];
  }
}

export { searcher, finder };
