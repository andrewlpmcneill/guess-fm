import React from "react";

import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import Dialog from "../Dialog";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Dialog />);
});

it("renders with a title", () => {
  render(<Dialog 
    title="GUESS FM" 
    content="Try to guess the country that the radio station playing is in.
    Your score will be based on how far away your guess is." 
    action="PLAY" /> );
    const titleElement = screen.getByText(/GUESS FM/i);
    expect(titleElement).toBeInTheDocument();
});

it("renders with dialog text", () => {
  render(<Dialog 
    title="GUESS FM" 
    content="Try to guess the country that the radio station playing is in.
    Your score will be based on how far away your guess is." 
    action="PLAY" /> );
    const textElement = screen.getByText(/radio station playing/i);
    expect(textElement).toBeInTheDocument();
});


