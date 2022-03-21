import Results from "../components/Results/Results";
import { storiesOf } from "@storybook/react";

storiesOf("Results menu", module)
  .addParameters({
    
  })
  .add("Base", () => <Results></Results>);
