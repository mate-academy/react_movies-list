import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Movie } from '../../Movie/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies && movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>

);
