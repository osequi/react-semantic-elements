import React from "react";

import { checkRequiredProps, nonEmptyClassname } from "./ReactSemanticElements";

it("returns false when props are empty", () => {
  const result = checkRequiredProps({});
  expect(result).toBe(false);
});

it("returns false when children is not defined", () => {
  const result = checkRequiredProps({ notChildren: "notChildren" });
  expect(result).toBe(false);
});

it("returns true when children is defined", () => {
  const result = checkRequiredProps({ children: "children" });
  expect(result).toBe(true);
});
