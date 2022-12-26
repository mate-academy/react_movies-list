import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type MovieListProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MovieListProps> = ({ movies }) => (
  <>
    <ul>
      { movies.map(movie => {
        return (
          <li key={movie.imdbId}>
            <MovieCard movie={movie} />
          </li>
        );
      })}
    </ul>
  </>
);
