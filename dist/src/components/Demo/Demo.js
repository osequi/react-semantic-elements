"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DemoDefaultProps = exports.DemoPropTypes = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Headings = _interopRequireWildcard(require("../Headings"));

var _Nav = _interopRequireWildcard(require("../Nav"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: red;\n  color: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 1em;\n  border: 1px solid;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 1em;\n  border: 1px solid;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Defines the prop types
 */
var propTypes = {
  headings: _propTypes["default"].shape(_Headings.HeadingsPropTypes),
  nav: _propTypes["default"].shape(_Nav.NavPropTypes)
};
/**
 * Defines the default props
 */

exports.DemoPropTypes = propTypes;
var defaultProps = {
  headings: _Headings.HeadingsDefaultProps,
  nav: _Nav.NavDefaultProps
};
/**
 * Styles the component container
 */

exports.DemoDefaultProps = defaultProps;
var Container = (0, _styledComponents["default"])("section")(function (props) {
  return {};
});
var HeadingsStyled = (0, _styledComponents["default"])(_Headings["default"])(function (props) {
  return {
    background: "red",
    color: "white"
  };
});
var HeadingsHidden = (0, _styledComponents["default"])(_Headings["default"])(function (props) {
  return {
    display: "block"
  };
}); // NOTE: This isn't working

var HeadingsStyledAttrs = (0, _styledComponents["default"])(_Headings["default"]).attrs(function (props) {
  return {
    style: {
      background: "red",
      color: "white"
    }
  };
})(_templateObject());
var H1StyledAttrs = (0, _styledComponents["default"])("h1").attrs(function (props) {
  return {
    style: {
      background: "red",
      color: "white"
    }
  };
})(_templateObject2());
var NavStyled = (0, _styledComponents["default"])(_Nav["default"])(_templateObject3());
/**
 * Displays the component
 */

var Demo = function Demo(props) {
  var headings = props.headings,
      nav = props.nav;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    className: "Demo"
  }, /*#__PURE__*/_react["default"].createElement(_Headings["default"], headings, "Demo"), /*#__PURE__*/_react["default"].createElement(HeadingsStyled, null, "Headings styled"), /*#__PURE__*/_react["default"].createElement(HeadingsHidden, {
    display: false
  }, "This shouldn't be visible"), /*#__PURE__*/_react["default"].createElement(HeadingsStyledAttrs, null, "Headings styled with attrs"), /*#__PURE__*/_react["default"].createElement(H1StyledAttrs, null, "H1 styled with attrs"), /*#__PURE__*/_react["default"].createElement(_Nav["default"], nav, "Simple nav"), /*#__PURE__*/_react["default"].createElement(NavStyled, nav, "Styled nav"));
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;
var _default = Demo;
exports["default"] = _default;

//# sourceMappingURL=Demo.js.map