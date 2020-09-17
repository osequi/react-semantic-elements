"use strict";

var _react = _interopRequireDefault(require("react"));

var _ReactSemanticElements = require("./ReactSemanticElements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

it("returns `ClassName` when props are empty", function () {
  var result = (0, _ReactSemanticElements.nonEmptyClassname)({});
  expect(result).toBe("ClassName");
});
it("returns `Article` when `className` is not defined", function () {
  var result = (0, _ReactSemanticElements.nonEmptyClassname)({
    type: "article"
  });
  expect(result).toBe("Article");
});
it("returns `class-name` when `className` is defined", function () {
  var result = (0, _ReactSemanticElements.nonEmptyClassname)({
    className: "class-name",
    type: "article"
  });
  expect(result).toBe("class-name");
});
it("returns false when props are empty", function () {
  var result = (0, _ReactSemanticElements.requiredPropsAreSet)({});
  expect(result).toBe(false);
});
it("returns false when children is not defined", function () {
  var result = (0, _ReactSemanticElements.requiredPropsAreSet)({
    notChildren: "notChildren"
  });
  expect(result).toBe(false);
});
it("returns true when children is defined", function () {
  var result = (0, _ReactSemanticElements.requiredPropsAreSet)({
    children: "children"
  });
  expect(result).toBe(true);
});

//# sourceMappingURL=ReactSemanticElements.test.js.map