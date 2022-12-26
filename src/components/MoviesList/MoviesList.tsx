import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        <div key={movie.imdbId} className="card" data-cy="Movie">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};
