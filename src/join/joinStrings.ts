export function joinStrings<T extends string[], D extends string = "_">(
  array: T,
  divider: D = "_" as D
): Join<T, D>[] {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length + 1; j++) {
      result.push(array.slice(i, j).join(divider));
    }
  }
  return result as Join<T, D>[];
}

export type Join<
  T extends string[],
  divider extends string,
  prefix extends string = never
> = T extends [infer first extends string, ...infer rest extends string[]]
  ?
      | first
      | (rest extends never
          ? never
          :
              | Join<rest, divider, prefix>
              | Join<rest, divider, first>
              | (prefix extends string
                  ?
                      | `${prefix}${divider}${first}`
                      | Join<rest, divider, `${prefix}${divider}${first}`>
                  : never))
  : never;
