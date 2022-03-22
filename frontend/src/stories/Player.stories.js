import { React, useState } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PlayButton from "../components/Player/PlayButton";
import Player from "../components/Player/index";
import Volume from "../components/Player/Volume";

storiesOf("PlayButton", module)
  .addParameters({

  })
  .add("Playing", () => <PlayButton icon="playing" />)
  .add("Paused", () => <PlayButton icon="paused"/>);

storiesOf("Volume", module)
  .addParameters({
    // parameters
  })
  .add("No Volume", () => <Volume value={0} />)
  .add("Full Volume", () => <Volume value={100}/>)
  .add("50% Volume", () => <Volume value={50}/>)
  .add("Adjustable Volume", () => {
    const [value, setValue] = useState(30);
    return <Volume value={value} onChange={(event, newValue) => {
    setValue(newValue);
    }}/>
  })