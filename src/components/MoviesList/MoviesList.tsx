import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../Types/Movie';

type Props = {
  list: Movie[];
};

export const MoviesList: React.FC<Props> = ({ list }) => (
  <div className="movies">
    {list.map(card => (
      <MovieCard card={card} />
    ))}
  </div>
);
