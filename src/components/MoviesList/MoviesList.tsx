import React from 'react';
import './MoviesList.scss';
import { MovieTypes } from '../../types/MovieTypes';
import { MovieCard } from '../MovieCard';

type Props = {
  movie: MovieTypes[];
};
export const MoviesList: React.FC<Props> = ({ movie }) => (
  <>
    <div className="movies">
      {movie.map(movieEl => (
        <div className="card">
          <MovieCard {...movieEl} key={movieEl.imdbId} />
        </div>
      ))}
    </div>
  </>
);
