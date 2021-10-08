import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: MovieFromServer[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movies">
      {
        movies.map(item => (
          <MovieCard data={item} />
        ))
      }
    </div>
  );
};
