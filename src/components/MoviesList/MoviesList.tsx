import React from 'react';
import { MovieType } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: MovieType[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {
      movies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))
    }
  </div>
);
