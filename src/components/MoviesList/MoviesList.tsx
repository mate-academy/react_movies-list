import React from 'react';
import { MovieCard } from '../MovieCard';
import { MovieType } from '../../types/MovieType';

import './MoviesList.scss';

type Props = {
  movies: MovieType[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(({
      title, description, imgUrl, imdbUrl, imdbId,
    }) => (
      <MovieCard
        key={imdbId}
        title={title}
        description={description}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
      />
    ))}
  </div>
);
