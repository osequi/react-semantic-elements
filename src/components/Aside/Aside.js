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
  title: "Aside",
};

/**
 * Displays a `<Aside>` component
 */
const Aside = (props) => {
  const { heading, title, display, children } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!requiredPropsAreSet(props)) return null;

  /**
   * Always displays a className.
   * When `className` is not specified it will become `Aside`.
   */
  const className = nonEmptyClassname({ ...props, type: "aside" });

  /**
   * Overwrites the `children` prop of the `heading`.
   */
  const heading2 = { ...heading, children: title };

  return (
    <aside className={className}>
      {display ? <Headings {...heading2} /> : null}
      {children}
    </aside>
  );
};

Aside.propTypes = propTypes;
Aside.defaultProps = defaultProps;

export default Aside;
export { propTypes as AsidePropTypes, defaultProps as AsideDefaultProps };
