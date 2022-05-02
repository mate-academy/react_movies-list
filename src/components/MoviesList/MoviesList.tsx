import React from 'react';
import { Movie } from '../../types/movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  moviesList: Movie[];
};

export const MoviesList: React.FC<Props> = ({ moviesList }) => (
  <div className="movies">
    {moviesList.map(item => (
      <MovieCard
        key={item.imdbId}
        title={item.title}
        description={item.description}
        imdbUrl={item.imdbUrl}
        imgUrl={item.imgUrl}
      />
    ))}
  </div>
);
