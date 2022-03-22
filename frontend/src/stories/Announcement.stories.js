import Announcement from '../components/Announcement';
import { storiesOf } from "@storybook/react";

storiesOf("Announcement", module)
  .addParameters({
    
  })
  .add("Round 1 Announcement", () => <Announcement round={1} />
    )