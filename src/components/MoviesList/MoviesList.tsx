import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type PP = {
  moviesArr: Movie[];
};

export const MoviesList: React.FC<PP> = ({ moviesArr }) => (
  <div className="movies">
    <ul>
      {moviesArr.map(movie => (
        <li key={movie.imgUrl}>
          <MovieCard
            movie={movie}
          />
        </li>
      ))}
    </ul>
  </div>
);
