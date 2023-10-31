import { ReactNode } from 'react';

export type GameResult = Players | 'draw';
export type Players = 'x' | 'o';
export type TileOption = Players | '';

export interface TileProps {
  children?: ReactNode;
  onClick: () => void;
}

export const Tile = ({ children, onClick }: TileProps) => {
  return (
    <button
      onClick={onClick}
      className='w-24 h-24 text-3xl uppercase border rounded font--bold border-slate-500 bg-slate-600 hover:scale-105'
    >
      {children}
    </button>
  );
};
