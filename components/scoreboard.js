import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PlayerCard from './playerCard';
import ScoreBlock from './scoreBlock';
import styles from './scoreboard.module.css';

export default function Scoreboard() {
  const initialMatch = {
    matchType: 'singles',
    matchLength: 5,
    players: ['Vivek', 'Eddy'],
    completedSets: [[1, 6], [1,7]],
    currentGame: [40, 0],
    currentSet: [5, 5],
    winner: null,
  };

  const [match, setMatch] = useState(initialMatch);

 
  const { currentGame, currentSet, players, completedSets } = match; 
  
  const player1CompletedSet = completedSets.map((score) => 
  <ScoreBlock score={score[0]} setScore/>)
  const player2CompletedSet = completedSets.map((score) => 
  <ScoreBlock score={score[1]} setScore/>)

  return (
    <div>
      <div className={styles.scoreBoard}>
        <div className={styles.playerScore}>
          <PlayerCard name={players[0]} flag="🇭🇰" />
          {player1CompletedSet}
          <ScoreBlock score={currentSet[0]} setScore />
          <ScoreBlock score={currentGame[0]} />
        </div>
        <div className={styles.playerScore}>
          <PlayerCard name={players[1]} flag="🇮🇱" />
          {player2CompletedSet}
          <ScoreBlock score={currentSet[1]} setScore />
          <ScoreBlock score={currentGame[1]} />
        </div>
      </div>
      {match.players}
    </div>
  );
}
