import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Player from '../Player/Player'

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Player />);
});