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
      {movies.map((movie: any) => (
        <li className="card" key={movie.id}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  </>
);
