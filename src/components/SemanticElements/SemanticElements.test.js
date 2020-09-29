import React from "react";
import { render } from "@testing-library/react";
import SemanticSemanticElements from "./SemanticSemanticElements";

it("has a SemanticSemanticElements component", () => {
  const { getByText } = render(<SemanticSemanticElements />);
  expect(getByText("SemanticSemanticElements")).toBeInTheDocument();
});
