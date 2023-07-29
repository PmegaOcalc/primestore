export function arrayToObject<T extends any[]>(
  array: T
): Partial<Record<T[number], true>> {
  return array.reduce((obj, item) => {
    obj[item] = true;
    return obj;
  }, {});
}
