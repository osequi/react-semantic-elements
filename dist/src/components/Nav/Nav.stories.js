"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithTitle = exports.WithChildren = exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Nav = _interopRequireDefault(require("./Nav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Nav",
  component: _Nav["default"]
};
/**
 * Should display nothing since `children` is not set
 */

exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_Nav["default"], null);
};

exports.Default = Default;
Default.decorators = [function (Story) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "It should be empty because `children` is not set by default."), /*#__PURE__*/_react["default"].createElement(Story, null));
}];

var WithChildren = function WithChildren() {
  return /*#__PURE__*/_react["default"].createElement(_Nav["default"], {
    children: "Now it displays the children. Without title, by default. Please check the `HTML` tab on the right sidebar for the generated code."
  });
};

exports.WithChildren = WithChildren;

var WithTitle = function WithTitle() {
  return /*#__PURE__*/_react["default"].createElement(_Nav["default"], {
    children: "Now it displays also the title",
    title: "Title",
    display: true
  });
};

exports.WithTitle = WithTitle;

//# sourceMappingURL=Nav.stories.js.map