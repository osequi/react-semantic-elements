import React from "react";
import Article from "../Article";

export default {
  title: "Components/ReactSemanticElements",
  component: Article,
};

/**
 * Testing the reused PropTypes with the help of Article
 */
export const Default = () => <Article />;
Default.decorators = [
  (Story) => (
    <div>
      <p>It should be empty because `children` is not set by default.</p>
      <Story />
    </div>
  ),
];

export const WithChildren = () => (
  <Article children="Now it displays the children. Please check the `HTML` tab on the right sidebar for the generated code." />
);

export const WithTitleHidden = () => (
  <Article children="Title is hidden" title="Title" display={false} />
);

export const WithCustomTitleTag = () => (
  <Article
    children="The heading title tag is 'h1'"
    heading={{ children: "title", level: "h1" }}
  />
);

export const WithCustomClassname = () => (
  <Article children="Article className is `Classname`" className="Classname" />
);
