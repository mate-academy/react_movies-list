import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        // eslint-disable-next-line react/jsx-key
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};
