import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../react-app-env';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    <ul>
      {movies.map(movie => (
       <li>
          <MovieCard
            movie={movie}
          />
        </li>
      ))}
    </ul>
  </div>
);
