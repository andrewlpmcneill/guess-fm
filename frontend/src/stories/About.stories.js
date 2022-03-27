import About from '../components/Dialog/About';
import { storiesOf } from "@storybook/react";

storiesOf("About", module)
  .addParameters({
    
  })
  .add("Round 1 About", () => <About open={true} />
    )