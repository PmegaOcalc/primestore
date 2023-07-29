import { arrayToObject } from "./arrayToObject";
import { joinStrings } from "./joinStrings";

export * from "./joinStrings";
export * from "./arrayToObject";

export const join = <T extends any[], D extends string>(
  source: T,
  divider: D
) => arrayToObject(joinStrings(source, divider));
