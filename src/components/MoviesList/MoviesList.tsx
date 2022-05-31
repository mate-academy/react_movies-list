import React from 'react';
import './MoviesList.scss';
import { Movie, MovieCard } from '../MovieCard';

type MovieList = {
  movies: Movie[];
};

export const MoviesList: React.FC<MovieList> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
