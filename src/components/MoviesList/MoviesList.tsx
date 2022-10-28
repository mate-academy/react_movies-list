import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul>
    <div className="movies">
      {movies.map((movie: Movie) => (
        <li key={movie.imdbId}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </div>
  </ul>
);
