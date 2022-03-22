import { render, screen } from '@testing-library/react';
import Results from "../Results/Results"

const DUMMY_GUESSES_DATA = [
  {id: 1, country:"Singapore", distanceAway: 4500, direction: "N" },
  {id: 2, country:"Zimbabwe", distanceAway: 6000, direction: "S" },
  {id: 3, country:"Monstserrat", distanceAway: 3200, direction: "SW" },
  {id: 4, country:"Italy", distanceAway: 1800, direction: "NE" },
  {id: 5, country:"Norway", distanceAway: 0, direction: "" },
];

const DUMMY_SCORE_DATA = 2

describe("Results", () => {
  it("renders without crashing", () => {
    render(<Results />);
  });

  it("renders guesses with a value of 'italy' when guesses data is passed in", ()=>{
    const { getByText } = render(<Results  guesses={DUMMY_GUESSES_DATA} score={DUMMY_SCORE_DATA}/>);
    expect(getByText("Italy")).toBeInTheDocument();
  });

  it("renders 'no guesses currently' when there are no guesses passed in", () => {
    const { getByText } = render(<Results  guesses={null} score={DUMMY_SCORE_DATA}/>);
    expect(getByText("No guesses currently")).toBeInTheDocument();
  });

  it("renders '0/3' when no score is provided", () => {
    const { getByText } = render(<Results  guesses={null} score={null}/>);
    expect(getByText("0/3")).toBeInTheDocument();
  });

  it("renders '2/3' when a score of a value two is passed in", () => {
    const { getByText } = render(<Results  guesses={null} score={DUMMY_SCORE_DATA}/>);
    expect(getByText("2/3")).toBeInTheDocument();
  });

});
