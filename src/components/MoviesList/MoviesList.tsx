import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies__wrapper">
    <ul className="movies">
      {movies.map(movie => (
        <li key={movie.imdbId} className="movies__list-item">
          <MovieCard  movie={movie} />
        </li>
      ))}
    </ul>
  </div>
  
);
