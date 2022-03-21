import Results from "../components/Results/Results";
import { storiesOf } from "@storybook/react";

const DUMMY_GUESSES_DATA = [
  {id: 1, country:"Singapore", distanceAway: 4500, direction: "N" },
  {id: 2, country:"Zimbabwe", distanceAway: 6000, direction: "S" },
  {id: 3, country:"Monstserrat", distanceAway: 3200, direction: "SW" },
  {id: 4, country:"Italy", distanceAway: 1800, direction: "NE" },
  {id: 5, country:"Norway", distanceAway: 0, direction: "" },
];

const DUMMY_SCORE_DATA = 2

storiesOf("Results menu", module)
  .addParameters({})
  .add("Base", () => <Results guesses={DUMMY_GUESSES_DATA} score={DUMMY_SCORE_DATA}></Results>)
  .add("first round no guesses", ()=> <Results guesses={null} score={null}></Results>)
  .add("first round no score", ()=> <Results guesses={DUMMY_GUESSES_DATA} score={null}></Results>)
  .add("new round no guesses", ()=> <Results guesses={null} score={null}></Results>);
