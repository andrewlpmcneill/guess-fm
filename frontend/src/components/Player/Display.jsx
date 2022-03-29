import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import getRandomFrequency from '../../helpers/getRandomFrequency';
import Ticker from 'react-ticker';

export default function Display(props) {

  const { round, text, setText } = props;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const newFrequency = getRandomFrequency();
    const newText = `YOU ARE NOW LISTENING TO ${newFrequency} GUESS FM...RELAX, TUNE IN, AND DROP A PIN...ENJOY ROUND ${round === 0 ? 1 : round}!`;
    setText(newText);
    setTimeout(() => {
      setReady(true)
    }, 400)
  }, [round])

  return (
    <Box
      sx={{
        marginBottom: 0.5,
        borderRadius: "4px",
        backgroundColor: "#1B2126",
        border: "1px solid #4D4D75",
        paddingBottom: 1.5,
        minWidth: width,
        maxWidth: width,
      }}
    >
      {ready && <Ticker
      speed={5}
      mode="smooth"
      offset="run-in"
      height={30}>
      {({ index }) => (
          <>
            <p
              style={{
                color: "#C9333B",
                fontFamily: "LCD Bold",
                letterSpacing: "4px",
                fontSize: "14px",
                whiteSpace: "nowrap",
                textShadow: "0 0 3px #c9333b, 0 0 5px #c9333b",
              }}
            >
              {text ? text : "PLACEHOLDER"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </>
        )}
      </Ticker>}
    </Box>
  );
}
