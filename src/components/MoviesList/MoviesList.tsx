import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <div
          className="card"
          data-cy="Movie"
          key={movie.imdbId}
        >
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  </>
);
