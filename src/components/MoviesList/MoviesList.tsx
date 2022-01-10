import React from 'react';
import './MoviesList.scss';
// import { SlowBuffer } from 'buffer';
import { MovieCard } from '../MovieCard';

interface Movie {
  title: string;
  description?: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

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
