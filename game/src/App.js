import { Client } from 'boardgame.io/react';
import { TicTacToe } from './game';
import { TicTacToeBoard } from './board';
import React from 'react';

const TicTacToeClient = Client({ 
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: { server : window.location.origin },
});

// TODO: change this with a sort of new-game UI
const gameId = window.location.search;

const App = () => (
  <div>
    <TicTacToeClient gameID={gameId} playerID="0" />
    <TicTacToeClient gameID={gameId} playerID="1" />
  </div>
);

export default App;
