export {};

function searchFn<T extends Record<string, string>>(
  data: T[],
  fields: Array<keyof T>,
  searchTerm: string
): T[] {
  const searchData = data.filter((item) => {
    /**
     * Do an exact match on the search term
     */
    if (searchTerm.startsWith('"') && searchTerm.endsWith('"')) {
      const regEx = new RegExp(searchTerm, 'ig');

      return fields.some((field) => regEx.test(item[field]));
    }

    /**
     * Do a fuzzy match on the search term
     */
    const regEx = new RegExp(searchTerm.split(' ').join('.*'), 'ig');

    return fields.some((field) => regEx.test(item[field]));
  });

  return searchData;
}
