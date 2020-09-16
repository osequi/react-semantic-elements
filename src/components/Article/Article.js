import React from "react";
import PropTypes from "prop-types";

/**
 * Imports other components and hooks
 */
import {
  ReactSemanticElementsPropTypes,
  ReactSemanticElementsDefaultProps,
  checkRequiredProps,
  nonEmptyClassname,
} from "../ReactSemanticElements";
import Headings from "../Headings";

/**
 * Defines the prop types
 */
const propTypes = {
  ...ReactSemanticElementsPropTypes,
};

/**
 * Defines the default props.
 */
const defaultProps = {
  ...ReactSemanticElementsDefaultProps,
  title: "Article",
};

/**
 * Displays am `<article>` component.
 */
const Article = (props) => {
  const { heading, title, display, children } = props;

  const type = "article";
  const props2 = { ...props, type };

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!checkRequiredProps(props2)) return null;

  /**
   * Always displays a className.
   * When `className` is not specified it will become `Nav`.
   */
  const className = nonEmptyClassname(props2);

  /**
   * Overwrites the `children` prop of the `heading`.
   */
  const heading2 = { ...heading, children: title };

  return (
    <article className={className}>
      <Headings {...heading2} />
      {children}
    </article>
  );
};

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
export { propTypes as ArticlePropTypes, defaultProps as ArticleDefaultProps };
