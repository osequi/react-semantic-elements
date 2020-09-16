import React from "react";
import { storiesOf } from "@storybook/react";

import ReactSemanticElements from "./ReactSemanticElements";
import description from "./ReactSemanticElements.md";

storiesOf("ReactSemanticElements", module).add(
  "Overview",
  () => <ReactSemanticElements />,
  {
    notes: { markdown: description }
  }
);
