import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../MovieCard/MovieType';

export interface PropsMoviesList {
  movies: Movie[]
}

export const MovieList: React.FC<PropsMoviesList> = ({ movies }) => (
  <ul className="movies">
    {movies.map(film => (
      <li key={film.imdbId}>
        <MovieCard {...film} />
      </li>
    ))}
  </ul>
);
