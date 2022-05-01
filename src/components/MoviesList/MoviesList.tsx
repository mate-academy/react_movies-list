import React from 'react';
import { MovieCard } from '../MovieCard';
import { MovieType } from '../Types/MovieType';
import './MoviesList.scss';

type Props = {
  data: MovieType[]
};

export const MoviesList: React.FC<Props> = ({ data }) => (
  <div className="movies">
    {data.map(movieObj => <MovieCard movieData={movieObj} />)}
  </div>
);
