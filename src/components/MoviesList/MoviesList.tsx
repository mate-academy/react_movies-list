import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movies } from '../../types/Movies';
import './MoviesList.scss';

type Props = {
  props: Movies[];
};

export const MoviesList: React.FC<Props> = ({ props }) => (
  <div className="movies">
    {props.map((movie) => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);
