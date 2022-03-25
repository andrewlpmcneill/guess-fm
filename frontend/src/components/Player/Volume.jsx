import React from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown'
import VolumeUp from '@mui/icons-material/VolumeUp'

export default function Volume(props) {

  const { handleChange, volume } = props;

  return (

    <Box sx={{ width: 220 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" data-testid="slider" value={volume} onChange={handleChange} />
        <VolumeUp />
      </Stack>
    </Box>
  )

}