import { joinStrings } from "./joinStrings";
import { Statuses } from "./test.types";

describe("joinStrings function", () => {
  test("to be defined", () => {
    expect(joinStrings).toBeDefined();
  });

  test("renders all possible strings correctly", () => {
    const samples: Statuses[] = [
      ["user", "D", "private", "ongoing", "event", "active", "punctual"],
      ["admin", "S", "public", "done", "class", "archive", "overdue"],
    ];

    const list = samples.map((x) => joinStrings(x));
    expect(list).toMatchSnapshot();
  });
});
