import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { PropTypes } from '../../types/PropTypes';

type Props = {
  movies: PropTypes[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(card => (
      <div className="card" key={card.imdbId}>
        <MovieCard {...card} />
      </div>
    ))}
  </div>
);
