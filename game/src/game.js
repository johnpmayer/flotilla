
import { Game } from 'boardgame.io/core';

function IsVictory(cells) {
    return false;
  }
  
  function IsDraw(cells) {
    return cells.filter(c => c === null).length === 0;
  }
  

export const TicTacToe = Game({
    setup: () => ({ cells: Array(9).fill(null) }),

    moves: {
        clickCell(G, ctx, id) {
        let cells = [...G.cells];

        if (cells[id] === null) {
            cells[id] = ctx.currentPlayer;
        }

        return { ...G, cells};
        }
    },

    flow: {
        endGameIf: (G, ctx) => {
        if (IsVictory(G.cells)) {
            return { winner: ctx.currentPlayer };
        }
        if (IsDraw(G.cells)) {
            return { draw: true };
        }
        },
    },

});
