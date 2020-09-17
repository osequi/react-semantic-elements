"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocsDefaultProps = exports.DocsPropTypes = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Defines the prop types
 */
var propTypes = {};
/**
 * Defines the default props
 */

exports.DocsPropTypes = propTypes;
var defaultProps = {};
/**
 * Styles the component container
 */

exports.DocsDefaultProps = defaultProps;
var Container = (0, _styledComponents["default"])("section")(function (props) {
  return {};
});
/**
 * Displays the component
 */

var Docs = function Docs(props) {
  return /*#__PURE__*/_react["default"].createElement(Container, {
    className: "Docs"
  }, "Docs");
};

Docs.propTypes = propTypes;
Docs.defaultProps = defaultProps;
var _default = Docs;
exports["default"] = _default;

//# sourceMappingURL=Docs.js.map