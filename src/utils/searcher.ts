// create a closure for searching with two functions
// attached to it. The closure will initialize the search
// and expose a find methord to search for a string in an
// array of objects

// import fuzzysort
import fuzzysort from "fuzzysort";

// import types
import type { Data, DataRow } from "../types/data";
import type { SearchStoreModel } from "../types/searchstore";

function searcher(array: Data): Data {
  // use fuzzysort to prepare data for fuzzy searching
  const preparedData: Data = array;
  preparedData.forEach((d: DataRow, i: number) => {
    preparedData[i] = {
      ...d,
      prepared: fuzzysort.prepare(d.drug),
    };
  });
  return preparedData;
}

function finder(store: SearchStoreModel<Data>): void {
  const searchTerm = store.search;
  if (searchTerm.length > 2) {
    store.filtered = fuzzysort.go(searchTerm, store.data, {
      key: "prepared",
      limit: 5,
      threshold: -10000,
    });
    store.showSuggestions = true;
  } else {
    store.filtered = [];
    store.showSuggestions = false;
  }
}

export { searcher, finder };
