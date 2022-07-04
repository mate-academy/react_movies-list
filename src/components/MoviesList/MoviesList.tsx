import React from 'react';

import { MoviesFromServer } from '../../type/MoviesFromServer';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

type Props = {
  movies: MoviesFromServer[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
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
