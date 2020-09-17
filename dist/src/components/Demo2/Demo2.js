"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Demo2DefaultProps = exports.Demo2PropTypes = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ReactSemanticElements = require("../ReactSemanticElements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Imports other components and hooks
 */

/**
 * Defines the prop types
 */
var propTypes = {};
/**
 * Defines the default props
 */

exports.Demo2PropTypes = propTypes;
var defaultProps = {};
/**
 * Styles the component container
 */

exports.Demo2DefaultProps = defaultProps;
var Container = (0, _styledComponents["default"])(_ReactSemanticElements.Section)(function (props) {
  return {};
});
/**
 * Styles the strapline
 */

var Strapline = (0, _styledComponents["default"])(_ReactSemanticElements.Headings)(function (props) {
  return {
    fontSize: "100%"
  };
});
/**
 * Styles the menu
 */

var Menu = (0, _styledComponents["default"])(_ReactSemanticElements.Nav)(function (props) {
  return {};
});
/**
 * Styles the pagination
 */

var Pagination = (0, _styledComponents["default"])(_ReactSemanticElements.Nav)(function (props) {
  return {};
});
/**
 * Styles the image
 */

var Image = (0, _styledComponents["default"])("img")(function (props) {
  return {
    border: "1px solid"
  };
});
/**
 * Displays the component
 */

var Demo2 = function Demo2(props) {
  return /*#__PURE__*/_react["default"].createElement(Container, {
    className: "Demo2",
    title: "React Semantic Elements",
    heading: {
      level: "h1"
    }
  }, /*#__PURE__*/_react["default"].createElement(Strapline, {
    level: "h2"
  }, "HTML semantic sectioning elements for React."), /*#__PURE__*/_react["default"].createElement("p", null, "By following the", " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines",
    title: "MDN"
  }, "MDN guidelines.")), /*#__PURE__*/_react["default"].createElement(_ReactSemanticElements.Header, null, /*#__PURE__*/_react["default"].createElement(Menu, {
    title: "Menu"
  }, "Menu navigation inside a `nav`")), /*#__PURE__*/_react["default"].createElement(_ReactSemanticElements.Article, null, /*#__PURE__*/_react["default"].createElement("p", null, "This is how this page is outlined in the W3C Validator."), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(Image, {
    src: "/assets/images/outlined.png",
    alt: "Outlined"
  })), /*#__PURE__*/_react["default"].createElement("p", null, "You can check it live by yourself at", " ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://validator.w3.org/nu/?showoutline=yes&doc=https%3A%2F%2Freact-semantic-elements.vercel.app%2F",
    title: "W3C validator"
  }, "the W3C validator for this page.")), /*#__PURE__*/_react["default"].createElement("p", null, "The SEO score in Google Lighthouse is 100%."), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(Image, {
    src: "/assets/images/seo.png",
    alt: "Seo"
  })), /*#__PURE__*/_react["default"].createElement("p", null, "The Accessibility score is only 91 due to factors not related to elements. All tests related to elements are passed."), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(Image, {
    src: "/assets/images/a11y.png",
    alt: "Accessibility"
  })), /*#__PURE__*/_react["default"].createElement(_ReactSemanticElements.Aside, null, /*#__PURE__*/_react["default"].createElement("p", null, "Article meta information inside an `aside`"))), /*#__PURE__*/_react["default"].createElement(Pagination, {
    title: "Pagination"
  }, "Pagination inside a `nav`"), /*#__PURE__*/_react["default"].createElement(_ReactSemanticElements.Footer, null, /*#__PURE__*/_react["default"].createElement("p", null, "Footer")));
};

Demo2.propTypes = propTypes;
Demo2.defaultProps = defaultProps;
var _default = Demo2;
exports["default"] = _default;

//# sourceMappingURL=Demo2.js.map