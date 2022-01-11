import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/movies';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(itemMovie => (
      <MovieCard key={itemMovie.imdbId} {...itemMovie} />
    ))}
  </div>
);
