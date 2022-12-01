import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Movies = {
  props: Movie[]
};

export const MoviesList: React.FC<Movies> = ({ props = [] }) => (
  <div className="movies">
    {props.map(fields => (
      <MovieCard
        key={fields.imdbId}
        imdbId={fields.imdbId}
        title={fields.title}
        description={fields.description}
        imgUrl={fields.imgUrl}
        imdbUrl={fields.imdbUrl}
      />
    ))}
  </div>
);
