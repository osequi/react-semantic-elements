"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithCustomClassname = exports.WithCustomTitleTag = exports.WithTitleHidden = exports.WithChildren = exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Article = _interopRequireDefault(require("../Article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: "Components/ReactSemanticElements",
  component: _Article["default"]
};
/**
 * Testing the reused PropTypes with the help of Article
 */

exports["default"] = _default;

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_Article["default"], null);
};

exports.Default = Default;
Default.decorators = [function (Story) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "It should be empty because `children` is not set by default."), /*#__PURE__*/_react["default"].createElement(Story, null));
}];

var WithChildren = function WithChildren() {
  return /*#__PURE__*/_react["default"].createElement(_Article["default"], {
    children: "Now it displays the children. Please check the `HTML` tab on the right sidebar for the generated code."
  });
};

exports.WithChildren = WithChildren;

var WithTitleHidden = function WithTitleHidden() {
  return /*#__PURE__*/_react["default"].createElement(_Article["default"], {
    children: "Title is hidden",
    title: "Title",
    display: false
  });
};

exports.WithTitleHidden = WithTitleHidden;

var WithCustomTitleTag = function WithCustomTitleTag() {
  return /*#__PURE__*/_react["default"].createElement(_Article["default"], {
    children: "The heading title tag is 'h1'",
    heading: {
      children: "title",
      level: "h1"
    }
  });
};

exports.WithCustomTitleTag = WithCustomTitleTag;

var WithCustomClassname = function WithCustomClassname() {
  return /*#__PURE__*/_react["default"].createElement(_Article["default"], {
    children: "Article className is `Classname`",
    className: "Classname"
  });
};

exports.WithCustomClassname = WithCustomClassname;

//# sourceMappingURL=ReactSemanticElements.stories.js.map