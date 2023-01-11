import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/index';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(card => (
      <MovieCard {...card} key={card.imdbId} />
    ))}
  </ul>
);
