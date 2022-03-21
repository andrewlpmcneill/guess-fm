import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import PlayButton from '../Player/PlayButton'

afterEach(cleanup);

it("renders without crashing", () => {
  render(<PlayButton />);
});