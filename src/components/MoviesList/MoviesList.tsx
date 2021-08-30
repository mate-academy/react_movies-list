import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = (props) => {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {
        movies.map(item => (
          <MovieCard
            key={item.imdbId}
            film={item}
          />
        ))
      }
    </div>
  );
};
