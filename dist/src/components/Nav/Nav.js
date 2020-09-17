"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavDefaultProps = exports.NavPropTypes = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ReactSemanticElements = require("../ReactSemanticElements");

var _Headings = _interopRequireDefault(require("../Headings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Defines the prop types
 */
var propTypes = _objectSpread({}, _ReactSemanticElements.ReactSemanticElementsPropTypes);
/**
 * Defines the default props.
 */


exports.NavPropTypes = propTypes;

var defaultProps = _objectSpread({}, _ReactSemanticElements.ReactSemanticElementsDefaultProps, {
  title: "Navigation",
  display: false
});
/**
 * Displays a `<nav>` component.
 */


exports.NavDefaultProps = defaultProps;

var Nav = function Nav(props) {
  var heading = props.heading,
      title = props.title,
      display = props.display,
      children = props.children;
  /**
   * Displays nothing if the mandatory props are not defined.
   */

  if (!(0, _ReactSemanticElements.requiredPropsAreSet)(props)) return null;
  /**
   * Always displays a className.
   * When `className` is not specified it will become `Nav`.
   */

  var className = (0, _ReactSemanticElements.nonEmptyClassname)(_objectSpread({}, props, {
    type: "nav"
  }));
  /**
   * Overwrites the `children` and `display` props of the `heading`.
   */

  var heading2 = _objectSpread({}, heading, {
    children: title,
    display: display
  });

  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement(_Headings["default"], heading2), children);
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
var _default = Nav;
exports["default"] = _default;

//# sourceMappingURL=Nav.js.map