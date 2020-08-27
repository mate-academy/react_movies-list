import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = props => (
  <>
    <div className="movies">
      {Object.keys(props)
        .map(movie => (
          <MovieCard
            key={props[movie].imdbId}
            {...props[movie]}
          />
        ))
      }
    </div>
  </>
);
