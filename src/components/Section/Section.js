import React from "react";
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
  type: "section",
};

/**
 * Displays a `<section>` element.
 */
const Section = (props) => {
  return <Elements {...props} />;
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
export { propTypes as SectionPropTypes, defaultProps as SectionDefaultProps };
