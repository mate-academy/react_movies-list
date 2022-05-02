import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  moviesList: Movie[]
};

export const MoviesList: React.FC<Props> = ({ moviesList }) => (
  <div className="movies">
    {moviesList.map(item => (
      <MovieCard
        title={item.title}
        description={item.description}
        imgUrl={item.imgUrl}
        imdbUrl={item.imdbUrl}
      />
    ))}
  </div>
);
