import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieType } from '.';
import './MoviesList.scss';

type Props = {
  data: MovieType[]
};

export const MoviesList: React.FC<Props> = ({ data }) => (
  <div className="movies">
    {data.map(
      movieObj => <MovieCard movieData={movieObj} key={movieObj.imdbId} />,
    )}
  </div>
);
