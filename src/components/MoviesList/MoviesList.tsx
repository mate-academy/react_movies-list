import React from 'react';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  films: Movie[];
};

export const MoviesList: React.FC<Props> = ({ films }) => (
  <div className="movies">
    {films.map(film => (
      <MovieCard
        film={film}
        key={film.imdbId}
      />
    ))}
  </div>
);
