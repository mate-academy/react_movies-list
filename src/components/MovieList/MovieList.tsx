import React from 'react';
import { Movie, MovieCard } from '../MovieCard';

export interface PropsMoviesList {
  movies: Movie[]
}

export const MovieList: React.FC<PropsMoviesList> = ({ movies }) => (
  <ul>
    {movies.map(film => (
      <li key={film.imdbId}>
        <MovieCard {...film} />
      </li>
    ))}
  </ul>
);
