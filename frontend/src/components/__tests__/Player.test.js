import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Player from '../Player/index'

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Player />);
});