import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type TypeOfMovie = {
  movies: Movie[];
};

export const MoviesList: React.FC<TypeOfMovie> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  </>
);
