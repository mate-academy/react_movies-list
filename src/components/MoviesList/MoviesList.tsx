import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';
import './MoviesList.scss';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC <Props> = (props) => {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
