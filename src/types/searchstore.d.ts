export interface SearchStoreModel<
  T extends Record<PropertyKey, any>,
> {
  data: T[];
  filtered: T[];
  selected: T | null;
  search: string;
  showSuggestions: boolean;
}
