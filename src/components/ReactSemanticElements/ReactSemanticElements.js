import React from "react";
import PropTypes from "prop-types";
import { startCase, isNil } from "lodash";

/**
 * Imports other components and hooks
 */
import Headings, { HeadingsPropTypes, HeadingsDefaultProps } from "../Headings";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The type of the element.
   * Like `nav`, 'article'
   * @type {string}
   */
  type: PropTypes.oneOf(["nav", "article"]),
  /**
   * The heading of the element.
   * It can be overwritten by the `title` and `display` props.
   * It's useful to specify a custom heading tag like `h1`
   * @type {HeadingsPropTypes}
   */
  heading: PropTypes.shape(HeadingsPropTypes),
  /**
   * The title of the element.
   * Overwrites the `{heading: children}` property.
   * It's easier to use `<Nav title="Menu" ..>` than `<Nav heading={{children: 'Menu'}} ..>`.
   * @type {string}
   */
  title: PropTypes.string,
  /**
   * Display the heading?
   * Overwrites the `{heading: display}` property.
   * It's easier to use `<Nav title="Menu" display={false} ..>` than `<Nav heading={{children: 'Menu', display: false}} ..>`
   * @type {bool}
   */
  display: PropTypes.bool,
  /**
   * The content of the element.
   * @type {any}
   */
  children: PropTypes.any,
  /**
   * The class name of the element.
   * When the element has `className` set it can be styled by the parent
   * @see https://styled-components.com/docs/basics#styling-any-component
   * @type {string}
   */
  className: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  type: null,
  heading: HeadingsDefaultProps,
  title: null,
  display: true,
  children: null,
  className: null,
};

/**
 * Checks for all required props to be set
 * @param  {object} props The props object
 * @return {boolean}      true, when all required props are set
 */
const requiredPropsAreSet = (props) => {
  const { children } = props;

  return !isNil(children);
};

/**
 * Sets the className to `startCase(type)` when className is empty
 * @param  {object} props The props object
 * @return {string}       The className
 */
const nonEmptyClassname = (props) => {
  const { className, type } = props;

  /**
   * Returns `ClassName` when `className` and `type` is not defined
   */
  if (!className && !type) return "ClassName";

  return className ? className : startCase(type);
};

/**
 * Displays nothing. Used only for PropTypes and business logic functions
 */
const ReactSemanticElements = (props) => {
  return null;
};

ReactSemanticElements.propTypes = propTypes;
ReactSemanticElements.defaultProps = defaultProps;

export default ReactSemanticElements;
export {
  propTypes as ReactSemanticElementsPropTypes,
  defaultProps as ReactSemanticElementsDefaultProps,
  requiredPropsAreSet,
  nonEmptyClassname,
};
