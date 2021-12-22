import React from 'react';
import { PropTypes } from '../types/PropTypes';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: PropTypes[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbId} className="card">
        <MovieCard
          key={movie.imdbId}
          title={movie.title}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
          description={movie.description}
        />
      </li>
    ))}
  </ul>
);
