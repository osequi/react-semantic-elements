import React from "react";
import { storiesOf } from "@storybook/react";

import Demo2 from "./Demo2";
import description from "./Demo2.md";

storiesOf("Demo2", module).add("Overview", () => <Demo2 />, {
  notes: { markdown: description }
});
