"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Docs = _interopRequireDefault(require("./Docs"));

var _Docs2 = _interopRequireDefault(require("./Docs.md"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)("Docs", module).add("Overview", function () {
  return /*#__PURE__*/_react["default"].createElement(_Docs["default"], null);
}, {
  notes: {
    markdown: _Docs2["default"]
  }
});

//# sourceMappingURL=Docs.stories.js.map