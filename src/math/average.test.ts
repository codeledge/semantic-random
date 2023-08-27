import { describe, expect, test } from "@jest/globals";
import { average } from "./average";

describe("average", () => {
  test("no arg", async () => {
    expect(average([])).toBe(NaN);
  });

  test("args", async () => {
    expect(average([1, 2])).toBe(1.5);
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });
});
