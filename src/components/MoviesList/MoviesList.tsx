import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
// eslint-disable-next-line import/no-cycle
import { MovieCard } from '../MovieCard';

type Props = {
  dataMovie: Movie[];
};

export const MoviesList: React.FC<Props> = ({ dataMovie }) => (
  <div className="movies">
    {dataMovie.map((movie) => (
      <MovieCard dataMovie={movie} key={movie.imdbId} />
    ))}
  </div>
);
