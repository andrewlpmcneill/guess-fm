import React from "react";
import styles from "./GameScore.module.css";
import { Box } from "@mui/material";

export default function GameScore(props) {
  const score = props.data ? props.data : 0;

  return (
    <Box className={styles.scoreContainer}>
      <h2 className={styles.scoreItem}>Current Score:</h2>
      <p className={styles.scoreItem}>{score}/3</p>
    </Box>
  );
}
