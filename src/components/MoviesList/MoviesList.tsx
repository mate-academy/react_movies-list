import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { List } from '../MovieCard/List';

type Props = {
  moviesCatalog: List[];
};

export const MoviesList: React.FC<Props> = ({ moviesCatalog }) => (
  <div className="movies">
    {moviesCatalog.map(movie => (
      <React.Fragment key={movie.imdbId}>
        <MovieCard {...movie} />
      </React.Fragment>
    ))}
  </div>
);
