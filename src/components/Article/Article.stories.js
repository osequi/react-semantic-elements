import React from "react";
import { storiesOf } from "@storybook/react";

import Article from "./Article";
import description from "./Article.md";

storiesOf("Article", module).add("Overview", () => <Article />, {
  notes: { markdown: description }
});
