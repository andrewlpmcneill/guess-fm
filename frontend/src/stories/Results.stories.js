import Results from "../components/Results/Results";
import GameScore from "../components/Results/GameScore";
import GuessesItem from "../components/Results/GuessesItem";
import Guesses from "../components/Results/Guesses";
import { storiesOf } from "@storybook/react";

const DUMMY_GUESSES_DATA = [
  {id: 1, country:"Singapore", distanceAway: 4500, direction: "N" },
  {id: 2, country:"Zimbabwe", distanceAway: 6000, direction: "S" },
  {id: 3, country:"Monstserrat", distanceAway: 3200, direction: "SW" },
  {id: 4, country:"Italy", distanceAway: 1800, direction: "NE" },
  {id: 5, country:"Norway", distanceAway: 0, direction: "" },
];

const DUMMY_SCORE_DATA = 2

storiesOf("GameScore", module)
  .addParameters({})
  .add("no data", () =><GameScore data={null}/>)
  .add("with data", ()=><GameScore data={DUMMY_SCORE_DATA}/>);

storiesOf("GuessesItem", module)
.addParameters({})
.add("incorrect guess", () =><GuessesItem data={{id: 1, country:"Singapore", distanceAway: 4500, direction: "N" }}/>)
.add("correct guess", () =><GuessesItem data={{id: 5, country:"Norway", distanceAway: 0, direction: "" }}/>);

storiesOf("Guesses", module)
  .addParameters({})
  .add("no data", () => <Guesses data={null}/>)
  .add("with data", () => <Guesses data={DUMMY_GUESSES_DATA}/>);


storiesOf("Results menu", module)
  .addParameters({})
  .add("Base show", () => <Results guesses={DUMMY_GUESSES_DATA} score={DUMMY_SCORE_DATA}></Results>)
  .add("Base hide", () => <Results guesses={DUMMY_GUESSES_DATA} score={DUMMY_SCORE_DATA} menuStatus={false}></Results>)
  .add("first round no guesses", ()=> <Results guesses={null} score={null}></Results>)
  .add("first round no score", ()=> <Results guesses={DUMMY_GUESSES_DATA} score={null}></Results>)
  .add("new round no guesses", ()=> <Results guesses={null} score={null}></Results>);
