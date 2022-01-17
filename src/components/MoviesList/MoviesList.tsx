import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../Types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = (props) => (
  <ul className="movies-list">
    {props.movies.map((movie) => (
      <li className="card" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
