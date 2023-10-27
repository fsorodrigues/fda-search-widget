export interface SearchStoreModel<
  T extends Record<PropertyKey, any>,
> {
  data: T[];
  filtered: T[];
  search: string;
}
