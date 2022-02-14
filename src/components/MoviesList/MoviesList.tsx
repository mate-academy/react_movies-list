import React from 'react';
import './MoviesList.scss';
import { Film } from '../../types/film';
import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  films: Film[];
};

export const MoviesList: React.FC<Props> = ({ films }) => (
  <ul className="movies">
    {films.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
