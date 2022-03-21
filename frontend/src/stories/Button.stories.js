import Button from '@mui/material/Button';
import { storiesOf } from "@storybook/react";

storiesOf("Button", module)
  .addParameters({
    
  })
  .add("Base", () => <Button variant="contained">Hello World</Button>);
