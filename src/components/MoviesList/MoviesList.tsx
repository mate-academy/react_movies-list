import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../types.tsx/types';

import './MoviesList.scss';

export type Props = {
  Props: Movie[],
};

export const MoviesList: React.FC<Props> = ({ Props }) => (
  <>
    {Props.map(film => (
      <div className="card">
        <MovieCard
          key={film.imdbId}
          title={film.title}
          description={film.description}
          imgUrl={film.imgUrl}
          imdbUrl={film.imdbUrl}
          imdbId={film.imdbId}
        />
      </div>
    ))}
  </>
);
