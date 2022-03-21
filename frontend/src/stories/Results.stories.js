import Results from "../components/Results/Results";
import { storiesOf } from "@storybook/react";

const DUMMY_GUESSES_DATA = [
  { distanceAway: 4500, direction: "N" },
  { distanceAway: 6000, direction: "S" },
  { distanceAway: 3200, direction: "SW" },
  { distanceAway: 1800, direction: "NE" },
  { distanceAway: 0, direction: "" },
];


storiesOf("Results menu", module)
  .addParameters({
    
  })
  .add("Base", () => <Results guesses={DUMMY_GUESSES_DATA}></Results>);
