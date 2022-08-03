/* eslint-disable max-len */
import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Movie } from '../../types/movie';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(el => <MovieCard movie={el} />)}
    </div>
  </>
);
