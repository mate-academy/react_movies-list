import React from 'react';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

type Props = {
  movies?: Movie[];
};

export const MoviesList: React.FC<Props> = (props) => {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.map(movie => (
        <div className="card" key={movie.imdbId}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};
