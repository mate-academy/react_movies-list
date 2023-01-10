import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/index';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(card => (
      <div
        className="card"
        data-cy="Movie"
        key={card.imdbId}
      >
        <MovieCard {...card} />
      </div>
    ))}
  </div>
);
