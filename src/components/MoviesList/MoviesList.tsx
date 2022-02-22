import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Item, Data } from './types';

type Props = {
  data: Data;
};

export const MoviesList: React.FC<Props> = ({ data }) => (
  <div className="movies">
    {
      data.map((item: Item) => {
        return (
          <MovieCard {...item} key={item.imdbId} />
        );
      })
    }
  </div>
);
