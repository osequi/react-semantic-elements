"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomClassName = exports.CustomLevel = exports.Hidden = exports.WithChildren = exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Headings = _interopRequireDefault(require("./Headings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/Headings",
  component: _Headings["default"]
};
exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_Headings["default"], null);
};

exports.Default = Default;
Default.decorators = [function (Story) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "It should be empty because `children` is empty by default."), /*#__PURE__*/_react["default"].createElement(Story, null));
}];

var WithChildren = function WithChildren() {
  return /*#__PURE__*/_react["default"].createElement(_Headings["default"], {
    children: "Now it displays the children. Please check the `HTML` tab on the right sidebar for the generated code."
  });
};

exports.WithChildren = WithChildren;

var Hidden = function Hidden() {
  return /*#__PURE__*/_react["default"].createElement(_Headings["default"], {
    children: "Please check the `HTML` tab on the right sidebar for the generated code.",
    display: false
  });
};

exports.Hidden = Hidden;

var CustomLevel = function CustomLevel() {
  return /*#__PURE__*/_react["default"].createElement(_Headings["default"], {
    level: "h1",
    children: "Level is H1"
  });
};

exports.CustomLevel = CustomLevel;

var CustomClassName = function CustomClassName() {
  return /*#__PURE__*/_react["default"].createElement(_Headings["default"], {
    className: "Custom",
    children: "className is `Custom`"
  });
};

exports.CustomClassName = CustomClassName;

//# sourceMappingURL=Headings.stories.js.map