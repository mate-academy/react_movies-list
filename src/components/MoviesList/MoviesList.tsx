import React from 'react';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(({
      description, imdbUrl, imgUrl, title,
    }) => {
      return (
        <MovieCard
          key={title + imdbUrl}
          title={title}
          description={description}
          imgUrl={imgUrl}
          imdbUrl={imdbUrl}
        />
      );
    })}
  </div>
);
