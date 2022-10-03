import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

type MovieType = {
  movies: Movie[];
};

export const MoviesList: React.FC<MovieType> = ({ movies }) => (
  <ul className="movies">
    {
      movies.map(singleMovie => (
        <MovieCard
          key={singleMovie.imdbId}
          movie={singleMovie}
        />
      ))
    }
  </ul>
);
