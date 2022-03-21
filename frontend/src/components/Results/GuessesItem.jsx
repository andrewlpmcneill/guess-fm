import React, { Fragment } from "react";
import styles from "./GuessesItem.module.css";

export default function Guesses(props) {
  const guessData = props.data;

  const directionClue = guessData.direction ? (
    <p>{guessData.direction}</p>
  ) : (
    <p>✔</p>
  );

  return (
    <div className={styles.guessItem}>
      <div className={`${styles.guessItem__column} ${styles.country}`}>
        <p>{guessData.country}</p>
      </div>
      <div className={`${styles.guessItem__column} ${styles.distanceAway}`}>
        <p>{guessData.distanceAway}km </p>
      </div>
      <div className={`${styles.guessItem__column} ${styles.direction}`}>
        {directionClue}
      </div>
    </div>
  );
}
