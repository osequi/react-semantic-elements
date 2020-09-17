"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Demo = _interopRequireDefault(require("./Demo2"));

var _Demo2 = _interopRequireDefault(require("./Demo2.md"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)("Demo2", module).add("Overview", function () {
  return /*#__PURE__*/_react["default"].createElement(_Demo["default"], null);
}, {
  notes: {
    markdown: _Demo2["default"]
  }
});

//# sourceMappingURL=Demo2.stories.js.map