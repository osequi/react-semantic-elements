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
  title: "Header",
};

/**
 * Displays a `<Header>` component
 */
const Header = (props) => {
  const { heading, title, display, children } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!requiredPropsAreSet(props)) return null;

  /**
   * Always displays a className.
   * When `className` is not specified it will become `Header`.
   */
  const className = nonEmptyClassname({ ...props, type: "header" });

  /**
   * Overwrites the `children` prop of the `heading`.
   */
  const heading2 = { ...heading, children: title };

  return (
    <header className={className}>
      {display ? <Headings {...heading2} /> : null}
      {children}
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
export { propTypes as HeaderPropTypes, defaultProps as HeaderDefaultProps };
