import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

export const MoviesList: React.FC<{ movies: Movie[] }> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <div className="card" key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
          imdbId={movie.imdbId}
        />
      </div>
    ))}
  </div>
);
