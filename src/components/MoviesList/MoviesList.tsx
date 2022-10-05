import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    <li>
      {movies.map((oneMovie: Movie) => (
        <MovieCard
          key={oneMovie.imdbId}
          movie={oneMovie}
        />
      ))}
    </li>
  </ul>
);
