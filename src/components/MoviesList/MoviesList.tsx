import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movies } from '../../react-app-env';

import './MoviesList.scss';

type Props = {
  movies: Movies[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
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
