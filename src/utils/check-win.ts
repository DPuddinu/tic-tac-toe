import { GameResult, TileOption } from "../components/Tile";
const len = 3;
const example = ['o', 'o', 'x',
  'x', 'o', 'o',
  'o', 'x', 'x']

export function gameOver(tiles: TileOption[]): GameResult | null {
  let winner: TileOption | null = checkColumns(tiles);
  if (!winner) winner = checkRows(tiles);
  if (!winner) winner = checkDiagonals(tiles);
  if (!winner && tiles.filter(t => t !== '').length === tiles.length) {
    return 'draw'
  }
  return winner
}


function checkColumns(tiles: TileOption[]): TileOption | null {
  for (let i = 0; i < len; i++) {
    const lastTile: TileOption = tiles[i];
    let count = 0;

    for (let j = i; j < tiles.length; j += 3) {
      const element = tiles[j];
      if (element !== '' && element === lastTile) {
        count++;
        if (count === len) {
          return lastTile;
        }
      }
    }
  }
  return null;
}

function checkRows(tiles: TileOption[]) {
  let prev = tiles[0], count = 0;

  for (let i = 0; i < tiles.length; i++) {
    const x = tiles[i];
    if (i % len === 0 && count < len) {
      count = 0;
    }
    if (x === prev) {
      count++;
      prev = x;
      if (count === len) {
        return x;
      }
    }
  }
  return null;
}

function checkDiagonals(tiles: TileOption[]) {
  let prev_diag_1 = tiles[0];
  let prev_diag_2 = tiles[len - 1];
  let countDiag1 = 0, countDiag2 = 0;

  let count = 0;
  let i = 0;
  let j = len - 1;

  while (count !== len) {
    const a = tiles[i];
    if (a === prev_diag_1 && a !== '') {
      countDiag1++;
      if (countDiag1 === len) return a;
      prev_diag_1 = a;
    }

    const b = tiles[j];
    if (b === prev_diag_2 && b !== '') {
      countDiag2++;
      if (countDiag2 === len) return b;
      prev_diag_2 = b;
    }

    i += len + 1;
    j += len - 1;
    count++;
  }
  return null;
}
checkDiagonals(example as TileOption[])