import React from 'react';
import './MoviesList.scss';
import { SlowBuffer } from 'buffer';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../Types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = (props) => (
  <ul className="movies">
    {props.movies.map((movie: Movie) => (
      <li className="card" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
