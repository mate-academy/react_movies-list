import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Films = {
  movies: Movie[]
};

export const MoviesList: React.FC<Films> = ({ movies = [] }) => {
  return (
    <div className="movies">
      {movies.map(film => (
        <MovieCard key={film.imdbId} movie={film} />
      ))}
    </div>
  );
};
