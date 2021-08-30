import React from 'react';
import './MoviesList.scss';
import { MovieTypes } from '../../types/MovieTypes';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: MovieTypes[];
};
export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <div className="card">
          <MovieCard {...movie} key={movie.imdbId} />
        </div>
      ))}
    </div>
  </>
);
