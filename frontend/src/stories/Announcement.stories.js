import Announcement from '../components/Dialog/Announcement';
import { storiesOf } from "@storybook/react";

storiesOf("Announcement", module)
  .addParameters({
    
  })
  .add("Round 1 Announcement", () => <Announcement round={1} />
    )