/* eslint-disable max-len */
import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  moviesData: Movie[],
};

export const MoviesList: React.FC<Props> = ({ moviesData }) => (
  <div className="movies">
    {moviesData.map(movieOfMoves => <MovieCard movie={movieOfMoves} key={movieOfMoves.imdbId} />)}
  </div>

);
