import React from 'react';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = (props: Props) => {
  const { movies } = props;

  return (
    <ul className="movies">
      {
        movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.imdbId} />
        ))
      }
    </ul>
  );
};
