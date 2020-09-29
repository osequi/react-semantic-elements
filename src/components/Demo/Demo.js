import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import Elements from "../Elements";
import {
  Article,
  Aside,
  Footer,
  Header,
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "../Elements";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Defines the styles
 */
const useStyles = makeStyles(() => ({
  container: {},
}));

/**
 * Displays the component
 */
const Demo = (props) => {
  const { container } = useStyles(props);

  return (
    <div className={clsx("Demo", container)}>
      <Header title="Demo" display={true} />
      <Elements type="article">Article</Elements>
      <Article title="Another article">
        <H1>Heading level 1</H1>
        <Heading level={1}>Heading level 1</Heading>
        <H2>Heading level 2</H2>
        <H3>Heading level 3</H3>
        <H4>Heading level 4</H4>
        <H5>Heading level 5</H5>
        <H6>Heading level 6</H6>
        <p>Article body.</p>
        <Aside title="Aside">An aside inside the article.</Aside>
      </Article>
      <Footer>Footer</Footer>
    </div>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
