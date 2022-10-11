import React from 'react';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';

import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    <div className="movies">
      {movies.map((movie: Movie) => (
        <div className="card" data-cy="Movie" key={movie.imdbId}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  </>
);
