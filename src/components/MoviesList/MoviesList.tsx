import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';

type Movies = {
  movies: Movie[];
};

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map((movie: Movie) => (
        <li className="card" key={movie.imdbId}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  </>
);
