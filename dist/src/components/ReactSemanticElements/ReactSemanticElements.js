"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nonEmptyClassname = exports.requiredPropsAreSet = exports.ReactSemanticElementsDefaultProps = exports.ReactSemanticElementsPropTypes = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _Headings = _interopRequireWildcard(require("../Headings"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Imports other components and hooks
 */

/**
 * Defines the prop types
 */
var propTypes = {
  /**
   * The type of the element.
   * Like `nav`, 'article'
   * @type {string}
   */
  type: _propTypes["default"].oneOf(["nav", "article"]),

  /**
   * The heading of the element.
   * It can be overwritten by the `title` and `display` props.
   * It's useful to specify a custom heading tag like `h1`
   * @type {HeadingsPropTypes}
   */
  heading: _propTypes["default"].shape(_Headings.HeadingsPropTypes),

  /**
   * The title of the element.
   * Overwrites the `{heading: children}` property.
   * It's easier to use `<Nav title="Menu" ..>` than `<Nav heading={{children: 'Menu'}} ..>`.
   * @type {string}
   */
  title: _propTypes["default"].string,

  /**
   * Display the heading?
   * Overwrites the `{heading: display}` property.
   * It's easier to use `<Nav title="Menu" display={false} ..>` than `<Nav heading={{children: 'Menu', display: false}} ..>`
   * @type {bool}
   */
  display: _propTypes["default"].bool,

  /**
   * The content of the element.
   * @type {any}
   */
  children: _propTypes["default"].any,

  /**
   * The class name of the element.
   * When the element has `className` set it can be styled by the parent
   * @see https://styled-components.com/docs/basics#styling-any-component
   * @type {string}
   */
  className: _propTypes["default"].string
};
/**
 * Defines the default props
 */

exports.ReactSemanticElementsPropTypes = propTypes;
var defaultProps = {
  type: null,
  heading: _Headings.HeadingsDefaultProps,
  title: null,
  display: true,
  children: null,
  className: null
};
/**
 * Checks for all required props to be set
 * @param  {object} props The props object
 * @return {boolean}      true, when all required props are set
 */

exports.ReactSemanticElementsDefaultProps = defaultProps;

var requiredPropsAreSet = function requiredPropsAreSet(props) {
  var children = props.children;
  return !(0, _lodash.isNil)(children);
};
/**
 * Sets the className to `startCase(type)` when className is empty
 * @param  {object} props The props object
 * @return {string}       The className
 */


exports.requiredPropsAreSet = requiredPropsAreSet;

var nonEmptyClassname = function nonEmptyClassname(props) {
  var className = props.className,
      type = props.type;
  /**
   * Returns `ClassName` when `className` and `type` is not defined
   */

  if (!className && !type) return "ClassName";
  return className ? className : (0, _lodash.startCase)(type);
};
/**
 * Displays nothing. Used only for PropTypes and business logic functions
 */


exports.nonEmptyClassname = nonEmptyClassname;

var ReactSemanticElements = function ReactSemanticElements(props) {
  return null;
};

ReactSemanticElements.propTypes = propTypes;
ReactSemanticElements.defaultProps = defaultProps;
var _default = ReactSemanticElements;
exports["default"] = _default;

//# sourceMappingURL=ReactSemanticElements.js.map