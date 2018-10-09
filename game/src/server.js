
const path = require('path');
const KoaStatic = require('koa-static');
const Server = require('boardgame.io/server').Server;
const TicTacToe = require('./game').TicTacToe;

const server = Server({ games: [TicTacToe] });
const buildPath = path.join(__dirname, '../build');

server.app.use(KoaStatic(buildPath));

console.log("Running the server on 8000");

server.run(8000);