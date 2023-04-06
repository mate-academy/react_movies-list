/* eslint-disable max-len */
import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {
      movies.map(movieObj => (
        <div className="movies" key={movieObj.imdbId}>
          <MovieCard movie={movieObj} />
        </div>
      ))
    }
  </>
);
