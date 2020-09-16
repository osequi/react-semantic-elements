import React from "react";
import Article from "./Article";

export default {
  title: "Components/Article",
  component: Article,
};

/**
 * Should display nothing since `children` is not set
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
