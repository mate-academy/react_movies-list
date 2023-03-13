import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        imgUrl={movie.imgUrl}
        title={movie.title}
        description={movie.description}
        imdbUrl={movie.imdbUrl}
        key={movie.imdbId}
      />
    ))}
  </div>
);
