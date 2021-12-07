import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../typedefs/Movie';

import './MoviesList.scss';

interface Props {
  movies: Movie[],
}

export const MoviesList: React.FC<Props> = ({
  movies,
}) => (
  <ul className="movies">
    {movies.map(card => (
      <li className="card" key={card.imdbId}>
        <MovieCard card={card} />
      </li>
    ))}
  </ul>
);
