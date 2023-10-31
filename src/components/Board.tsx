import { Tile, TileOption } from './Tile';

interface BoardProps {
  tiles: TileOption[] | undefined[];
  onClick: (i: number) => void;
}

export const Board = ({ onClick, tiles }: BoardProps) => {
  return (
    <div className='grid justify-center grid-flow-row grid-cols-3 gap-2'>
      {tiles.map((tile, i) => (
        <Tile key={i} onClick={() => onClick(i)}>
          {tile}
        </Tile>
      ))}
    </div>
  );
};
