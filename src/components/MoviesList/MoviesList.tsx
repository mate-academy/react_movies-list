import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  // array of objects
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        title={movie.title}
        description={movie.description}
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
      />
    ))}
  </>
);
