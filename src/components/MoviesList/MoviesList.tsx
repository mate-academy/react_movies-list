import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../interface/Movie';

type MovieListProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MovieListProps> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />))}
  </div>
);
