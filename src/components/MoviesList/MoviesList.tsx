import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';
import './MoviesList.scss';

type Props = {
  moviesList: Movie[];
};

export const MoviesList: React.FC<Props> = ({ moviesList }) => (
  <>
    <div className="movies">
      {moviesList.map(movie => (
        <MovieCard movie={movie} />
      ))}
    </div>
  </>
);
