import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type MovieType = {
  movies: Movie[];
};

export const MoviesList: React.FC<MovieType> = ({ movies = [] }) => {
  return (
    <div className="movies">
      {movies.map(film => (
        <MovieCard key={film.imdbId} movie={film} />
      ))}
    </div>
  );
};
