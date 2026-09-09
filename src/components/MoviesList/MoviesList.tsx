import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = props => {
  return (
    <div className="movies">
      {props.movies.map(movie => {
        return <MovieCard key={movie.imdbId} movie={movie} />;
      })}
    </div>
  );
};
