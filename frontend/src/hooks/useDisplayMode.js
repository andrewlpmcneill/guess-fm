import React, { useState } from "react";

export default useDisplay = (initial) => {
  const [open, setOpen] = useState(initial);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return {open, setOpen, toggleOpen}
};
