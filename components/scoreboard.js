import React from "react";
import PlayerCard from "./playerCard";
import ScoreBlock from "./scoreBlock";
import styles from "./scoreboard.module.css";

export default function Scoreboard() {
  return (
    <div className={styles.scoreBoard}>
      <div className={styles.playerScore}>
        <PlayerCard name="Yeung" flag="🇭🇰" />
        <ScoreBlock score="6" setScore />
        <ScoreBlock score="40" />
      </div>
      <div className={styles.playerScore}>
        <PlayerCard name="Shamir" flag="🇮🇱" />
        <ScoreBlock score="0" setScore />
        <ScoreBlock score="0" />
      </div>
    </div>
  );
}
