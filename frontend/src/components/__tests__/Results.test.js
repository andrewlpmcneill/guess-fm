import { render, screen } from '@testing-library/react';
import Results from "../Results/Results"

describe("Results", () => {
  it("renders without crashing", () => {
    render(<Results />);
  });
});
