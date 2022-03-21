import React from "react";
import styles from "./GameScore.module.css";

export default function GameScore(props) {
  const score = props.data ? props.data : 0;

  return (
    <div className={styles.scoreContainer}>
      <h2 className={styles.scoreItem}>Current Score:</h2>
      <h3 className={styles.scoreItem}>{score}/3</h3>
    </div>
  );
}
