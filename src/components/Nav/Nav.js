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
  title: "Navigation",
  display: false,
};

/**
 * Displays a `<nav>` component.
 */
const Nav = (props) => {
  const { heading, title, display, children } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!checkRequiredProps(props)) return null;

  /**
   * Always displays a className.
   * When `className` is not specified it will become `Nav`.
   */
  const className = nonEmptyClassname({ ...props, type: "nav" });

  /**
   * Overwrites the `children` and `display` props of the `heading`.
   */
  const heading2 = { ...heading, children: title, display: display };

  return (
    <nav className={className}>
      <Headings {...heading2} />
      {children}
    </nav>
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
export { propTypes as NavPropTypes, defaultProps as NavDefaultProps };
