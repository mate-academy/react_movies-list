import React from 'react';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';

type Props = {
  movie: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movie }) => (
  <>
    <div className="movies">
      {movie.map(item => (
        <MovieCard {...item} />
      ))}
    </div>
  </>
);
