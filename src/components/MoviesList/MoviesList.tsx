import './MoviesList.scss';

import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type MoviesListProps = { movies: Movie[] };

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
