import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movieList: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movieList = [] }) => (
  <div className="movies">
    {movieList.map(movie => (
      <MovieCard
        title={movie.title}
        description={movie.description}
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
      />
    ))}
  </div>
);
