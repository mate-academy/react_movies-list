import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList: React.FC = (movie) => (
  <div className="movies">
    {movie.map((card) => (
      <div key={card.imdbId}>
        <MovieCard {...card} />
      </div>
    ))}
  </div>
);
