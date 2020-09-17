import React from "react";
import PropTypes from "prop-types";

/**
 * Imports other components and hooks
 */
import {
  ReactSemanticElementsPropTypes,
  ReactSemanticElementsDefaultProps,
  requiredPropsAreSet,
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
 * Displays an `<article>` component.
 */
const Article = (props) => {
  const { heading, title, display, children } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!requiredPropsAreSet(props)) return null;

  /**
   * Always displays a className.
   * When `className` is not specified it will become `Section`.
   */
  const className = nonEmptyClassname({ ...props, type: "article" });

  /**
   * Overwrites the `children` prop of the `heading`.
   */
  const heading2 = { ...heading, children: title };

  return (
    <article className={className}>
      {display ? <Headings {...heading2} /> : null}
      {children}
    </article>
  );
};

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
export { propTypes as ArticlePropTypes, defaultProps as ArticleDefaultProps };
