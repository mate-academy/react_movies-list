import React from 'react';
import { MovieCard } from '../MovieCard';
import { Film } from '../../types/film';

import './MoviesList.scss';

type Props = {
  movies: Film[];
};

export const MoviesList: React.FC<Props> = (props) => {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.map(movie => (
        <div className="card" key={movie.imdbId}>
          <MovieCard film={movie} />
        </div>
      ))}
    </div>
  );
};
