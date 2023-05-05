import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

interface MovieListProps {
  movies: Movie[];
}

export const MoviesList: React.FC<MovieListProps > = ({ movies }) => {
  return (
    <ul className="movies">
      {
        movies.map((movie) => {
          return (
            <li
              className="card"
              data-cy="Movie"
              key={movie.imdbId}
            >
              <MovieCard movie={movie} />
            </li>
          );
        })
      }
    </ul>
  );
};
