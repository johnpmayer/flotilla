import { Client } from 'boardgame.io/react';
import { TicTacToe } from './game';
import { TicTacToeBoard } from './board';
import React from 'react';

// TODO: this breaks, use create-react-app proxy
const host = '192.168.43.178:8000';

const TicTacToeClient = Client({ 
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: { server : host },
});

const gameId = "a";

const App = () => (
  <div>
    <TicTacToeClient gameID={gameId} playerID="0" />
    <TicTacToeClient gameID={gameId} playerID="1" />
  </div>
);

export default App;
