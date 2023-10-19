// create a closure for searching with two functions
// attached to it. The closure will initialize the search
// and expose a find methord to search for a string in an
// array of objects

import type { Data, DataRow } from "../types/data";

function searcher(array: Data) {
  // prepare the data for search.
  // this section will come in handy later on
  // when we implement a fuzzy search
  //
  return {
    find: (s: string) => {
      // search the array for the string
      // and return the results
      console.log(s, array);

      return array.filter((item) =>
        item.slug.toLowerCase().includes(s.toLowerCase())
      );
    },
  };
}

export default searcher;
