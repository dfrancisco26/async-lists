import React from 'react';
import Game from './Game';
export default function GameList({ games = [], }) {
  return (
    <div className='game-list'>
      {
        games.map((game, i) => <Game {...game} key={game.name + i + game.id} />)
      }
    </div>
  );
}

