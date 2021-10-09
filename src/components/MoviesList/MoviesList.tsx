import React from 'react';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(key => (
      <MovieCard
        title={key.title}
        imdbUrl={key.imdbUrl}
        imdbId={key.imdbId}
        description={key.description}
        imgUrl={key.imgUrl}
      />
    ))}
  </div>
);
