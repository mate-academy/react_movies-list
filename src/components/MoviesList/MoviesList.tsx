import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../type/Movie';

import './MoviesList.scss';

interface Movies {
  movies: Movie[],
}

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        title={movie.title}
        description={movie.description}
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
        imdbId={movie.imdbId}
      />
    ))}
  </div>
);
