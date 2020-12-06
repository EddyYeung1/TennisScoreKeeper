import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function controller() {
  // to do buttons
  // 2 buttons for each player
  // fault and winner
  const initialMatch = {
    matchId: uuidv4(),
    matchType: '',
    matchLength: 5,
    players: [],
    completedSets: [[0, 0]],
    currentGame: [0, 0],
    currentSet: [0, 0],
    winner: null,
  };

  const [match, setMatch] = useState(initialMatch);
  const [matchId, setMatchId] = useState(initialMatch.matchId);
  const addMatch = (match) => {
    axios.post('/api/matches', match);
  };

  const getMatch = () => {
    const res = axios.get('http://localhost:3000/api/matches', { params: { matchId: 'c996d94a-d678-4f38-bb90-628db9dd1ee5' } });
    console.log(res);
  };

  const addPoint = (matchId, player) => {
    axios.put('/api/matches', { matchId, score: [30, 15] });
    // axios.put(`/api/matches/:${matchId}`, {})
  };
  return (
    <div>
      <div style={{ padding: 10 }}>
        <button
          style={{ marginBottom: '15px' }}
          onClick={() => setMatch({ ...match, matchType: 'singles' })}
        >
          {' '}
          Singles
          {' '}
        </button>
        <button
          style={{ marginBottom: '15px', marginLeft: '15px' }}
          onClick={() => setMatch({ ...match, matchType: 'doubles' })}
        >
          {' '}
          Doubles
          {' '}
        </button>
      </div>
      <div style={{ padding: 10 }}>
        <button
          style={{ marginBottom: '15px' }}
          onClick={() => setMatch({ ...match, matchLength: 3 })}
        >
          {' '}
          3 sets
          {' '}
        </button>
        <button
          style={{ marginBottom: '15px', marginLeft: '15px' }}
          onClick={() => setMatch({ ...match, matchLength: 5 })}
        >
          {' '}
          5 sets
          {' '}
        </button>
      </div>
      <div style={{ padding: 10 }}>
        <button
          style={{ marginBottom: '15px' }}
          onClick={() => setMatch({ ...match, players: [...match.players, 'Johnny'] })}
        >
          {' '}
          Johnny
          {' '}
        </button>
        <button
          style={{ marginBottom: '15px', marginLeft: '15px' }}
          onClick={() => setMatch({ ...match, players: [...match.players, 'Eddy'] })}
        >
          {' '}
          Eddy
          {' '}
        </button>
        <button
          style={{ marginBottom: '15px', marginLeft: '15px' }}
          onClick={() => setMatch({ ...match, players: [...match.players, 'Vivek'] })}
        >
          {' '}
          Vivek
          {' '}
        </button>
      </div>
      <button
        style={{ marginBottom: '15px', marginLeft: '15px' }}
        onClick={() => addMatch(match)}
      >
        {' '}
        Initiate Match!
        {' '}
      </button>

      <div>
        <button onClick={() => addPoint('c996d94a-d678-4f38-bb90-628db9dd1ee5')}>Eddy Point</button>
        <br />
        <br />
        <button onClick={() => getMatch()}>Vivek Point</button>
      </div>
    </div>
  );
}
