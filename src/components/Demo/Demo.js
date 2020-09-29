import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

/**
 * Imports other components and hooks
 */
import Elements from "../Elements";
import { Article, Aside, Footer, Header, Heading, H1 } from "../Elements";

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
        <Heading level={4}>Heading level 4</Heading>
        <p>Article body.</p>
        <Aside title="Aside">An aside inside the article.</Aside>
      </Article>
      <Footer>
        <H1>Footer</H1>
      </Footer>
    </div>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
