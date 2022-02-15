import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { FilmWhithId } from '../interface';

type Props = {
  films: FilmWhithId[];
};

export const MoviesList: React.FC<Props> = ({ films }) => (
  <ul className="movies">
    {films.map((film) => (
      <li
        id={film.imdbId}
        key={film.imdbId}
        className="card"
      >
        <MovieCard film={film} />
      </li>
    ))}
  </ul>
);
