import React from "react";

import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import DialogButton from "../Dialog/DialogButton";

afterEach(cleanup);

it("renders a clickable button", () => {
  const handleClick = jest.fn();
  render(
    <DialogButton onClick={handleClick} action="Clickable"></DialogButton>
  );

  const button = screen.getByText("Clickable");

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

// UNSURE OF THIS TEST
it("changes the open state on click", () => {
  const changeOpen = jest.fn();
  render(
    <DialogButton onClick={changeOpen} action="Clickable"></DialogButton>
  );
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation(open => [open, changeOpen]);

  const button = screen.getByText("Clickable")
  fireEvent.click(button);
  expect(changeOpen).toHaveBeenCalledTimes(1);

});