import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    <div className="movies">
      {movies.map(movi => (
        <div key={movi.title}>
          <MovieCard movie={movi} />
        </div>
      ))}
    </div>
  </>
);
