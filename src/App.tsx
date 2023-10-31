import { useEffect, useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { GameResult, Players, TileOption } from './components/Tile';
import { gameOver as gameResult } from './utils/check-win';

const FIRST_PLAYER: Players = 'o';
const EMPTY_BOARD  = new Array<TileOption>(9).fill('');

function App() {
  const [tiles, setTiles] = useState<TileOption[]>(EMPTY_BOARD);
  const [currentPlayer, setCurrentPlayer] = useState<Players>(FIRST_PLAYER);
  const [result, setResult] = useState<GameResult | null>(null)
  
  function toggleTile(index: number) {
    setTiles((tiles) => {
      const newTiles = tiles.map((t, i) => {
        if (i === index && t === '') {
          t = currentPlayer;
        }
        return t;
      });
      return newTiles;
    });
    setCurrentPlayer((player) => (player === 'o' ? 'x' : 'o'));
  }

  useEffect(() => {
    setResult(gameResult(tiles))
  }, [tiles]);

  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-2 bg-slate-800'>
      <button className='h-12 rounded shadow w-28 bg-slate-400' onClick={() => setTiles(EMPTY_BOARD)}>
        New Game
      </button>
      <Board onClick={toggleTile} tiles={tiles}></Board>
      {result && (
        <h3 className='text-lg text-slate-300'>
          The winner is <b>{result === 'o' ? 'Player 1': 'Player 2'}</b>
        </h3>
      )}
    </div>
  );
}

export default App;
