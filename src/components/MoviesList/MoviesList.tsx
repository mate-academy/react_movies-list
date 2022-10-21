import React from 'react';
import './MoviesList.scss';
import { MovieList } from '../../types/Movie';

import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<MovieList> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map((movie) => (
      <MovieCard
        title={movie.title}
        description={movie.description}
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
        imdbId={movie.imdbId}
      />
    ))}
  </ul>
);
