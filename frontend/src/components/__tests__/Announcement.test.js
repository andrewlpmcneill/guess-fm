import React from "react";

import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import Announcement from "../Announcement";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Announcement />);
});

it("renders with the correct round", () => {
  render(<Announcement 
    round={1} 
  /> );
    const roundElement = screen.getByText(/ROUND 1/i);
    expect(roundElement).toBeInTheDocument();
});

it("renders with a start button", () => {
  render(<Announcement /> );
    const buttonElement = screen.getByText(/start/i);
    expect(buttonElement).toBeInTheDocument();
});

it("has a clickable start button", () => {
  const handleClick = jest.fn();
  render(<Announcement 
    round={1}
    onClick={handleClick}
  /> );
  const button = screen.getByText(/round/i)
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1)
})