import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';

type Props = {
  movieList: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movieList }) => (
  <ul className="movies">
    {movieList.map(item => (
      <MovieCard key={item.imdbId} {...item} />
    ))}
  </ul>
);
