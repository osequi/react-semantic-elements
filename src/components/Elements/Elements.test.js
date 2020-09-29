import React from "react";
import { render } from "@testing-library/react";
import Elements from "./Elements";

it("has a Elements component", () => {
  const { getByText } = render(<Elements />);
  expect(getByText("Elements")).toBeInTheDocument();
});
