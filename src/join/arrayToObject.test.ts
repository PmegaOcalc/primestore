import { arrayToObject } from "./arrayToObject";
import { Statuses } from "./test.types";

describe("arrayToObject function", () => {
  test("to be defined", () => {
    expect(arrayToObject).toBeDefined();
  });

  test("renders all possible objects correctly", () => {
    const samples: Statuses[] = [
      ["user", "D", "private", "ongoing", "event", "active", "punctual"],
      ["admin", "S", "public", "done", "class", "archive", "overdue"],
    ];

    const tree = samples.map((x) => arrayToObject(x));
    expect(tree).toMatchSnapshot();
  });
});
