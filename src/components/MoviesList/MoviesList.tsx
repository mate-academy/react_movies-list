import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/index';
import { Movie } from '../../types/Movie';

interface Props {
  movies: Movie[]
}

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => {
        return (<MovieCard movie={movie} key={movie.imdbId} />);
      })}
    </div>
  );
};
