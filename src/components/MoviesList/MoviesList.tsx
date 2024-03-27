import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<{ movies: Movie[] }> = props => {
  return (
    <div className="movies">
      {props.movies.map((movie: Movie) => (
        <MovieCard
          key={movie.imdbId}
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
          imdbId={movie.imdbId}
        />
      ))}
    </div>
  );
};
