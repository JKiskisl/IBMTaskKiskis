/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */

import React from "react";
import { render } from "@testing-library/react";
import Header from "../src/components/header/header";

describe("Header Component", () => {
  it("renders the header text correctly", () => {
    const { getByText } = render(<Header />);
    const headerText = getByText("Cryptocurrency Price Tracker");
    expect(headerText).toBeInTheDocument();
  });

  it("renders the AppBar with the correct position", () => {
    const { container } = render(<Header />);
    const appBar = container.querySelector(".MuiAppBar-root");
    expect(appBar).toHaveAttribute("position", "static");
  });
});
