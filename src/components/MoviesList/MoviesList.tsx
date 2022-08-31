import React from 'react';
import { Movie } from '../../types/movie';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
  </ul>
);
