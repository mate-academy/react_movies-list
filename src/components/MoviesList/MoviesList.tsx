import React from 'react';
import { Movies } from '../type/interfaceList';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movies[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        title={movie.title}
        description={movie.description}
        img={movie.imgUrl}
        imdb={movie.imdbUrl}
      />
    ))}
  </div>
);
