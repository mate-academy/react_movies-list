import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="movies">
          {movies.map(movie => (
            <MovieCard {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
