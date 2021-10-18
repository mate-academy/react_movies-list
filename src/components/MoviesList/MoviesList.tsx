import React from 'react';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

import MoviesListType from '../../types/MoviesListType';
import Movie from '../../types/Movie';

export const MoviesList: React.FC<MoviesListType> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie: Movie) => (
      <div className="card" key={movie.title}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);
