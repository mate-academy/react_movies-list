import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(item => (
      <React.Fragment key={item.imdbId}>
        <MovieCard movie={item} />
      </React.Fragment>
    ))}
  </div>
);
