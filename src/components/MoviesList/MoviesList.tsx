import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  const content
  = movies.length > 0 ? (
    <div className="movies">
      <MovieCard movie={movies[0]} />
      <MovieCard movie={movies[1]} />
      <MovieCard movie={movies[2]} />
      <MovieCard movie={movies[3]} />
      <MovieCard movie={movies[4]} />
    </div>
  ) : (
    <div className="movies" />
  );

  return content;
};
