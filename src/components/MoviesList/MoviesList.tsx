import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Movie } from '../../Types';

export const MoviesList: React.FC<{ movies:Movie[] }> = ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map((movie) => <MovieCard movie={movie} />)}
    </ul>
  </>
);
