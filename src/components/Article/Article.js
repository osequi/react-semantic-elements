import React from "react";
import PropTypes from "prop-types";

/**
 * Imports other components and hooks
 */
import Elements, { ElementsPropTypes, ElementsDefaultProps } from "../Elements";

/**
 * Defines the prop types
 */
const propTypes = {
  ...ElementsPropTypes,
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...ElementsDefaultProps,
  type: "article",
};

/**
 * Displays an <article>
 */
const Article = (props) => {
  return <Elements {...props} />;
};

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
export { propTypes as ArticlePropTypes, defaultProps as ArticleDefaultProps };
