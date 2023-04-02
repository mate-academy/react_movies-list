import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbId}>
          <MovieCard movie={movie} key={movie.imdbId} />
        </li>
      ))}
    </ul>
  </div>
);
