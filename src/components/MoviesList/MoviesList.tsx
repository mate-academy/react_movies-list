import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MoviesListTypes } from '../Types';

type Props = {
  movies: MoviesListTypes[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map((movie) => (
        <li className="card">
          <MovieCard movie={movie} key={movie.imdbId} />
        </li>
      ))}
    </ul>
  </>
);
