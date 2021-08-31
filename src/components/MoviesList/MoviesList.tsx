import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Film } from '../../types/Film';

type Props = {
  moviesDataList: Film[],
};

export const MoviesList: React.FC<Props> = ({ moviesDataList }) => (
  <ul className="moviesList">
    {moviesDataList.map((movie: Film) => (
      <li key={movie.imdbId}>
        <MovieCard movieData={movie} />
      </li>
    ))}
  </ul>
);
