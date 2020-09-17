"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ReactSemanticElements["default"];
  }
});
Object.defineProperty(exports, "ReactSemanticElementsPropTypes", {
  enumerable: true,
  get: function get() {
    return _ReactSemanticElements.ReactSemanticElementsPropTypes;
  }
});
Object.defineProperty(exports, "ReactSemanticElementsDefaultProps", {
  enumerable: true,
  get: function get() {
    return _ReactSemanticElements.ReactSemanticElementsDefaultProps;
  }
});
Object.defineProperty(exports, "requiredPropsAreSet", {
  enumerable: true,
  get: function get() {
    return _ReactSemanticElements.requiredPropsAreSet;
  }
});
Object.defineProperty(exports, "nonEmptyClassname", {
  enumerable: true,
  get: function get() {
    return _ReactSemanticElements.nonEmptyClassname;
  }
});
Object.defineProperty(exports, "Article", {
  enumerable: true,
  get: function get() {
    return _Article["default"];
  }
});
Object.defineProperty(exports, "ArticlePropTypes", {
  enumerable: true,
  get: function get() {
    return _Article.ArticlePropTypes;
  }
});
Object.defineProperty(exports, "ArticleDefaultProps", {
  enumerable: true,
  get: function get() {
    return _Article.ArticleDefaultProps;
  }
});
Object.defineProperty(exports, "Aside", {
  enumerable: true,
  get: function get() {
    return _Aside["default"];
  }
});
Object.defineProperty(exports, "AsidePropTypes", {
  enumerable: true,
  get: function get() {
    return _Aside.AsidePropTypes;
  }
});
Object.defineProperty(exports, "AsideDefaultProps", {
  enumerable: true,
  get: function get() {
    return _Aside.AsideDefaultProps;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer["default"];
  }
});
Object.defineProperty(exports, "FooterPropTypes", {
  enumerable: true,
  get: function get() {
    return _Footer.FooterPropTypes;
  }
});
Object.defineProperty(exports, "FooterDefaultProps", {
  enumerable: true,
  get: function get() {
    return _Footer.FooterDefaultProps;
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});
Object.defineProperty(exports, "HeaderPropTypes", {
  enumerable: true,
  get: function get() {
    return _Header.HeaderPropTypes;
  }
});
Object.defineProperty(exports, "HeaderDefaultProps", {
  enumerable: true,
  get: function get() {
    return _Header.HeaderDefaultProps;
  }
});
Object.defineProperty(exports, "Headings", {
  enumerable: true,
  get: function get() {
    return _Headings["default"];
  }
});
Object.defineProperty(exports, "HeadingsPropTypes", {
  enumerable: true,
  get: function get() {
    return _Headings.HeadingsPropTypes;
  }
});
Object.defineProperty(exports, "HeadingsDefaultProps", {
  enumerable: true,
  get: function get() {
    return _Headings.HeadingsDefaultProps;
  }
});
Object.defineProperty(exports, "Nav", {
  enumerable: true,
  get: function get() {
    return _Nav["default"];
  }
});
Object.defineProperty(exports, "NavPropTypes", {
  enumerable: true,
  get: function get() {
    return _Nav.NavPropTypes;
  }
});
Object.defineProperty(exports, "NavDefaultProps", {
  enumerable: true,
  get: function get() {
    return _Nav.NavDefaultProps;
  }
});
Object.defineProperty(exports, "Section", {
  enumerable: true,
  get: function get() {
    return _Section["default"];
  }
});
Object.defineProperty(exports, "SectionPropTypes", {
  enumerable: true,
  get: function get() {
    return _Section.SectionPropTypes;
  }
});
Object.defineProperty(exports, "SectionDefaultProps", {
  enumerable: true,
  get: function get() {
    return _Section.SectionDefaultProps;
  }
});

var _ReactSemanticElements = _interopRequireWildcard(require("./ReactSemanticElements"));

var _Article = _interopRequireWildcard(require("../Article"));

var _Aside = _interopRequireWildcard(require("../Aside"));

var _Footer = _interopRequireWildcard(require("../Footer"));

var _Header = _interopRequireWildcard(require("../Header"));

var _Headings = _interopRequireWildcard(require("../Headings"));

var _Nav = _interopRequireWildcard(require("../Nav"));

var _Section = _interopRequireWildcard(require("../Section"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//# sourceMappingURL=index.js.map