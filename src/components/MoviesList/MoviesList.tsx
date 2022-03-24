import React from 'react';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../Types/Movies';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((item) => (
      <MovieCard
        key={item.imdbId}
        title={item.title}
        description={item.description}
        imgUrl={item.imgUrl}
        imdbUrl={item.imdbUrl}
      />
    ))}
  </div>
);
