import React from 'react';
import './MoviesList.scss';

import { Movies } from '../../types/Movies';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movies[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        title={movie.title}
        description={movie.description}
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
      />
    ))}
  </div>
);
