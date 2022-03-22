import Dialog from '../components/Dialog';
import { storiesOf } from "@storybook/react";

storiesOf("Dialog", module)
  .addParameters({
    
  })
  .add("Game Start", () => <Dialog 
    title="GUESS FM" 
    action="PLAY">{`
      HOW TO PLAY:\n

      📡 - A random radio station from somewhere in the world will play.\n
      🏴‍☠️ - You get 5 tries to guess what country it’s in.\n
      3️⃣ - Repeat for 2 more stations to get your score out of 3!\n
      `}
      
    </Dialog>
    )
  .add("Game End", () => <Dialog 
    title="WELL PLAYED!" 
    action="PLAY AGAIN">
      Your final score is X/3.
    </Dialog>
    )
