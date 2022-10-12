import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Prop = {
  movies: Movie[];
};

export const MoviesList: React.FC<Prop> = ({ movies }) => (
  <div className="movies">
    {movies.map((movieFromList) => (
      <MovieCard movie={movieFromList} key={movieFromList.imdbId} />
    ))}
  </div>
);
