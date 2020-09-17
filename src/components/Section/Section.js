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
  title: "Section",
};

/**
 * Displays a `<section>` component
 */
const Section = (props) => {
  const { heading, title, display, children } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!requiredPropsAreSet(props)) return null;

  /**
   * Always displays a className.
   * When `className` is not specified it will become `Section`.
   */
  const className = nonEmptyClassname({ ...props, type: "section" });

  /**
   * Overwrites the `children` prop of the `heading`.
   */
  const heading2 = { ...heading, children: title };

  return (
    <section className={className}>
      {display ? <Headings {...heading2} /> : null}
      {children}
    </section>
  );
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
export { propTypes as SectionPropTypes, defaultProps as SectionDefaultProps };
