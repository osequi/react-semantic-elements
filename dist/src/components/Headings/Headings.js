"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingsDefaultProps = exports.HeadingsPropTypes = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Defines the prop types
 */
var propTypes = {
  /**
   * The level of the element.
   * @type {string}
   */
  level: _propTypes["default"].string,

  /**
   * Display the element?
   * @type {bool}
   */
  display: _propTypes["default"].bool,

  /**
   * The children of the element.
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

exports.HeadingsPropTypes = propTypes;
var defaultProps = {
  level: "h3",
  display: true,
  children: null,
  className: null
};
/**
 * Displays the <h1>..<h6> elements
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
 */

exports.HeadingsDefaultProps = defaultProps;

var Headings = function Headings(props) {
  var level = props.level,
      display = props.display,
      children = props.children,
      className = props.className;
  /**
   * Displays nothing if there is no `children` prop defined
   */

  if (!children) return null;
  /**
   * Hides the element when display is `false`
   * `<h3 hidden>` can't be used because it can be overwritten in css.
   * See https://css-tricks.com/the-hidden-attribute-is-visibly-weak/
   *
   * In the parent this `display: none` property cannot be overwritten. See Demo.js for example
   */

  var style = display ? null : {
    display: "none"
  };
  /**
   * When `className` is not specified it will take the value of `level`
   */

  var className2 = className ? className : level;
  var heading = "";

  switch (level) {
    case "h1":
      heading = /*#__PURE__*/_react["default"].createElement("h1", {
        className: className2,
        style: style
      }, children);
      break;

    case "h2":
      heading = /*#__PURE__*/_react["default"].createElement("h2", {
        className: className2,
        style: style
      }, children);
      break;

    case "h3":
      heading = /*#__PURE__*/_react["default"].createElement("h3", {
        className: className2,
        style: style
      }, children);
      break;

    case "h4":
      heading = /*#__PURE__*/_react["default"].createElement("h4", {
        className: className2,
        style: style
      }, children);
      break;

    case "h5":
      heading = /*#__PURE__*/_react["default"].createElement("h5", {
        className: className2,
        style: style
      }, children);

    case "h6":
    default:
      heading = /*#__PURE__*/_react["default"].createElement("h6", {
        className: className2,
        style: style
      }, children);
  }

  return heading;
};

Headings.propTypes = propTypes;
Headings.defaultProps = defaultProps;
var _default = Headings;
exports["default"] = _default;

//# sourceMappingURL=Headings.js.map