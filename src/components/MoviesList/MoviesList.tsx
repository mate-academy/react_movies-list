import React from 'react';
import './MoviesList.scss';

import { Movie } from '../../types/movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {
      movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))
    }
  </div>
);
