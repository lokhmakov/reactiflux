const sort = <T, K extends keyof T>(a: T, b: T, key: K) =>
  a[key] > b[key] ? -1 : b[key] > a[key] ? 1 : 0

export function sortArrayOfObjectsByProperty<T, K extends keyof T>(
  array: T[],
  propertyToSortyBy: K,
  reverseSort?: boolean,
) {
  return reverseSort
    ? array.sort((a, b) => sort(a, b, propertyToSortyBy))
    : array.sort((a, b) => sort(b, a, propertyToSortyBy))
}
