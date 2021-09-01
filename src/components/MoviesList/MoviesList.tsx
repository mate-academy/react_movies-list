import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard/index';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = (props) => {
  const { movies } = props;

  return (
    <>
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.imdbId}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};
