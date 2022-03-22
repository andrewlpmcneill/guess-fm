import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Volume from '../Player/Volume'

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Volume />);
});