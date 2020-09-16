import React from "react";

import { checkRequiredProps, nonEmptyClassname } from "./ReactSemanticElements";

it("returns `ClassName` when props are empty", () => {
  const result = nonEmptyClassname({});
  expect(result).toBe("ClassName");
});

it("returns `Article` when `className` is not defined", () => {
  const result = nonEmptyClassname({ type: "article" });
  expect(result).toBe("Article");
});

it("returns `class-name` when `className` is defined", () => {
  const result = nonEmptyClassname({
    className: "class-name",
    type: "article",
  });
  expect(result).toBe("class-name");
});

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
