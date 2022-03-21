import Results from "../components/Results/Results";
import { storiesOf } from "@storybook/react";

const DUMMY_GUESSES_DATA = [
  { country:"Singapore", distanceAway: 4500, direction: "N" },
  { country:"Zimbabwe", distanceAway: 6000, direction: "S" },
  { country:"Monstserrat", distanceAway: 3200, direction: "SW" },
  { country:"Italy", distanceAway: 1800, direction: "NE" },
  { country:"Norway", distanceAway: 0, direction: "" },
];

const DUMMY_SCORE_DATA = 2

storiesOf("Results menu", module)
  .addParameters({})
  .add("Base", () => <Results guesses={DUMMY_GUESSES_DATA} score={DUMMY_SCORE_DATA}></Results>)
  .add("first round no guesses", ()=> <Results guesses={null} score={null}></Results>)
  .add("first round no score", ()=> <Results guesses={DUMMY_GUESSES_DATA} score={null}></Results>)
  .add("new round no guesses", ()=> <Results guesses={null} score={null}></Results>);
