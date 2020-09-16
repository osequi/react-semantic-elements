import React from "react";

import Article from "./Article";
import description from "./Article.md";

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
