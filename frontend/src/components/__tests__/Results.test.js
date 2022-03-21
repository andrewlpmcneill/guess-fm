import { render, screen } from '@testing-library/react';
import Results from "../Results/Results"

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Results />);
  });
});
