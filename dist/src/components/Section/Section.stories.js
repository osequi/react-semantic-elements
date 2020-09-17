"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithChildren = exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Section = _interopRequireDefault(require("./Section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Section",
  component: _Section["default"]
};
/**
 * Should display nothing since `children` is not set
 */

exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_Section["default"], null);
};

exports.Default = Default;
Default.decorators = [function (Story) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "It should be empty because `children` is not set by default."), /*#__PURE__*/_react["default"].createElement(Story, null));
}];

var WithChildren = function WithChildren() {
  return /*#__PURE__*/_react["default"].createElement(_Section["default"], {
    children: "Now it displays the children. Please check the `HTML` tab on the right sidebar for the generated code."
  });
};

exports.WithChildren = WithChildren;

//# sourceMappingURL=Section.stories.js.map