import React from 'react';
import { Movie } from '../../types/Movie';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="card" data-cy="movie-card">
      <img src={movie.posterUrl} alt={movie.title} data-cy="movie-poster" />
      <h2 data-cy="movie-title">{movie.title}</h2>
      <p data-cy="movie-year">{movie.year}</p>
      <p data-cy="movie-genre">{movie.genre}</p>
      <p data-cy="movie-rating">Rating: {movie.rating}</p>
      <p data-cy="movie-description">{movie.description}</p>
    </div>
  );
};
