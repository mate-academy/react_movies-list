import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../Types/Movie';

// next line was in the project, but linter does not like it.
// not sure if we need it
// import { SlowBuffer } from 'buffer';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = (props) => (
  <ul className="movies-list">
    {props.movies.map((movie: Movie) => (
      <li className="card" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
