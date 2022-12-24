import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

type Props = { movies: Movie[] };
export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div>
    {movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
  </div>
);
