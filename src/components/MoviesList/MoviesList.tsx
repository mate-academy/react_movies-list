import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Array<Movie>;
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  const mappedMovies = movies.map(movie => {
    return <MovieCard movie={movie} key={movie.imdbId} />;
  });

  return (
    <div className="movies">
      {mappedMovies}
    </div>
  );
};
