import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = (props) => {
  const { movies = [] } = props;

  return (
    <ul className="moviesList">
      {movies.map(movie => (
        <li key={movie.imdbId}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};
