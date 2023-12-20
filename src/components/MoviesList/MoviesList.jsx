import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesFromServer }) => (
  <>
    <div className="movies">
      {moviesFromServer.map(movie => (
        <MovieCard
          movie={movie}
          key={movie.imdbId}
        />
      ))}

    </div>
  </>
);
