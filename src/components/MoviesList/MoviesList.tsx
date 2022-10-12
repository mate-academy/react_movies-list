import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  listOfMovies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ listOfMovies }) => {
  return (

    <ul className="movies">
      {listOfMovies.map((movie) => {
        return (
          <li key={movie.imdbId}>
            <MovieCard
              movie={movie}
            />
          </li>
        );
      })}
    </ul>
  );
};
