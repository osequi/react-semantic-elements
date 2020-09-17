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
  title: "Footer",
};

/**
 * Displays a `<Footer>` component
 */
const Footer = (props) => {
  const { heading, title, display, children } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!requiredPropsAreSet(props)) return null;

  /**
   * Always displays a className.
   * When `className` is not specified it will become `Footer`.
   */
  const className = nonEmptyClassname({ ...props, type: "footer" });

  /**
   * Overwrites the `children` prop of the `heading`.
   */
  const heading2 = { ...heading, children: title };

  return (
    <footer className={className}>
      {display ? <Headings {...heading2} /> : null}
      {children}
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
export { propTypes as FooterPropTypes, defaultProps as FooterDefaultProps };
