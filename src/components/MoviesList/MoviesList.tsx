import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import Movie from '../../types/Movie';

interface Props {
  movie: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movie = [] }) => (
  <div className="movies">
    {movie.map((card) => (
      <div key={card.imdbId}>
        <MovieCard {...card} />
      </div>
    ))}
  </div>
);
