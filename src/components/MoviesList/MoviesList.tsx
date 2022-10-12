import React from 'react';
import './MoviesList.scss';
import { MoviesCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Movies = {
  movies: Movie[];
};

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li
        key={movie.imdbId}
        className="card"
        data-cy="Movie"
      >
        <MoviesCard {...movie} />
      </li>
    ))}
  </ul>
);
