import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import PlayButton from '../Player/PlayButton'

afterEach(cleanup);

it("renders without crashing", () => {
  render(<PlayButton />);
});

it("renders a clickable play button", () => {
  const handleClick = jest.fn();
  render(
    <PlayButton icon={"paused"} onClick={handleClick} />
  );
  const button = screen.getByTestId('play');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

it("renders a clickable pause button", () => {
  const handleClick = jest.fn();
  render(
    <PlayButton icon={"playing"} onClick={handleClick} />
  );
  const button = screen.getByTestId('pause');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});