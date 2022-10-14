import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </ul>
  );
};
