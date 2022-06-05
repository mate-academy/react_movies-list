import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

import { Movie } from '../../types';

interface Props {
  moviesList: Movie[];
}

export const MoviesList: React.FC<Props> = ({ moviesList }) => (
  <>
    {moviesList.map(({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    }) => (
      <MovieCard
        cardTitle={title}
        description={description}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
        imdbId={imdbId}
      />
    ))}
  </>
);
