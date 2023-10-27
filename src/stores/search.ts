// import from node_modules
import { writable } from "svelte/store";

// import types
import type { SearchStoreModel } from "../types/searchstore";

export const createSearchStore = <
  T extends Record<PropertyKey, any>,
>(
  data: T[]
) => {
  const { subscribe, set, update } = writable<
    SearchStoreModel<T>
  >({
    data: data,
    filtered: [],
    selected: null,
    search: "",
  });

  return {
    subscribe,
    set,
    update,
  };
};
