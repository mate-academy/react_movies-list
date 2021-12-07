import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/MovieTypes';

import './MoviesList.scss';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        title={movie.title}
        description={movie.description}
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
      />
    ))}
  </ul>
);
