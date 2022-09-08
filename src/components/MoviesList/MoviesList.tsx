import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';

type Props = {
  allmovies: Movie[];
};
export const MoviesList: React.FC<Props> = ({ allmovies }) => (
  <>
    <ul className="movies">
      {allmovies.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </ul>
  </>
);
