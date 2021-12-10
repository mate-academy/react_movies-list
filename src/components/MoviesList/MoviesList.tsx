import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { PropTypes } from '../types/PropTypes';

type Props = {
  movies: PropTypes[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbId} className="card">
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
