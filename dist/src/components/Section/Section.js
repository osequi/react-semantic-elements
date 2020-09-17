"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionDefaultProps = exports.SectionPropTypes = exports["default"] = void 0;

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


exports.SectionPropTypes = propTypes;

var defaultProps = _objectSpread({}, _ReactSemanticElements.ReactSemanticElementsDefaultProps, {
  title: "Section"
});
/**
 * Displays a `<section>` component
 */


exports.SectionDefaultProps = defaultProps;

var Section = function Section(props) {
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
   * When `className` is not specified it will become `Section`.
   */

  var className = (0, _ReactSemanticElements.nonEmptyClassname)(_objectSpread({}, props, {
    type: "section"
  }));
  /**
   * Overwrites the `children` prop of the `heading`.
   */

  var heading2 = _objectSpread({}, heading, {
    children: title
  });

  return /*#__PURE__*/_react["default"].createElement("section", {
    className: className
  }, display ? /*#__PURE__*/_react["default"].createElement(_Headings["default"], heading2) : null, children);
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
var _default = Section;
exports["default"] = _default;

//# sourceMappingURL=Section.js.map