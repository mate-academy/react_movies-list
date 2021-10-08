import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movieItem => (
      <MovieCard
        key={movieItem.imdbId}
        title={movieItem.title}
        description={movieItem.description}
        imgUrl={movieItem.imgUrl}
        imdbUrl={movieItem.imdbUrl}
      />
    ))}
  </div>
);
