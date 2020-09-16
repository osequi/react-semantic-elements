import React from "react";
import { storiesOf } from "@storybook/react";

import Docs from "./Docs";
import description from "./Docs.md";

storiesOf("Docs", module).add("Overview", () => <Docs />, {
  notes: { markdown: description }
});
