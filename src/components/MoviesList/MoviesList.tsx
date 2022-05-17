/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import './MoviesList.scss';
import { Props } from '../../Type/types';
import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => {
      return (
        <div key={movie.imdbId} className="card">
          <MovieCard {...movie} />
        </div>
      );
    })}
  </div>
);
