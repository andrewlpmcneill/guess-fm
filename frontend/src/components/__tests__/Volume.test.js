import React from "react";
import { render, cleanup } from "@testing-library/react";
import Volume from '../Player/Volume'

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Volume />);
});