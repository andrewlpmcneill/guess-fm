import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Ticker from "react-ticker";

export default function Display(props) {
  // const {  } = props;
  const message = "YOU ARE NOW LISTENING TO 101.7 GUESS FM";

  // useEffect(() => {

  // })

  return (
    <Box
      sx={{
        marginBottom: 0.5,
        borderRadius: "4px",
        backgroundColor: "#1B2126",
        border: "1px solid #4D4D75",
        paddingBottom: 1.5,
      }}
    >
      <Ticker speed={5} mode="smooth" offset="run-in" height={30}>
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
              {message}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            {/* <img src="www.my-image-source.com/" alt=""/> */}
          </>
        )}
      </Ticker>
    </Box>
  );
}
