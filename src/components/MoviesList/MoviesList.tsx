import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

type Prop = {
  movies: Movie[];
};

export const MoviesList: React.FC<Prop> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li>
        <MovieCard key={movie.imdbId} movie={movie} />
      </li>
    ))}
  </ul>
);
